import { contextSrv } from 'app/core/core';
import { registerAuthProvider, AuthProviderInfo, AuthProviderStatus } from 'app/features/auth-config';
import { AccessControlAction } from 'app/types';

import { SAMLStepKey } from '../types';

import SAMLStepAssertionMapping from './SAML/steps/AssertionMapping';
import SAMLStepConnectToIdP from './SAML/steps/ConnectToIdP';
import SAMLStepGeneral from './SAML/steps/General';
import SAMLStepKeyCert from './SAML/steps/KeyCert';
import SAMLStepSaveAndTest from './SAML/steps/SaveAndTest';
import { isDefaultSAMLConfig } from './SAML/utils';
import { getSAMLSettings } from "./SAML/utils/api";

export function initAuthConfig() {
  const samlAuthProvider: AuthProviderInfo = {
    id: 'saml',
    type: 'SAML',
    protocol: 'SAML 2.0',
    displayName: 'SAML',
    configPath: 'saml/general',
  };
  registerAuthProvider(samlAuthProvider, getConfigHook);
}

async function getConfigHook(): Promise<AuthProviderStatus> {
  if (contextSrv.hasPermission(AccessControlAction.SettingsRead)) {
    // TODO: might want to put this into a state
    const [samlSettings, rawSettings] = await getSAMLSettings();
    const isDefault = isDefaultSAMLConfig(rawSettings);

    // hidden when the api does not contain a valid response, this means the user doesn't have permission to see it
    const hide = Object.keys(samlSettings).length === 0 || Object.keys(rawSettings).length === 0;

    if (isDefault) {
      return { configured: false, enabled: false, hide };
    } else {
      return {
        configured: true,
        enabled: !!samlSettings.enabled,
        name: samlSettings.name,
        hide,
      };
    }
  }

  return { configured: false, enabled: false };
}

export const samlSteps = [
  { id: SAMLStepKey.General, name: 'General settings', component: SAMLStepGeneral },
  { id: SAMLStepKey.KeyCert, name: 'Key and certificate', component: SAMLStepKeyCert },
  { id: SAMLStepKey.ConnectToIdP, name: 'Connect Grafana with Identity Provider', component: SAMLStepConnectToIdP },
  { id: SAMLStepKey.AssertionMapping, name: 'User mapping', component: SAMLStepAssertionMapping },
  { id: SAMLStepKey.SaveAndTest, name: 'Test and enable', component: SAMLStepSaveAndTest },
];
