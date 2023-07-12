// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

export type ChallengeName =
	| 'SMS_MFA'
	| 'SOFTWARE_TOKEN_MFA'
	| 'SELECT_MFA_TYPE'
	| 'MFA_SETUP'
	| 'PASSWORD_VERIFIER'
	| 'CUSTOM_CHALLENGE'
	| 'DEVICE_SRP_AUTH'
	| 'DEVICE_PASSWORD_VERIFIER'
	| 'ADMIN_NO_SRP_AUTH'
	| 'NEW_PASSWORD_REQUIRED';

export type ChallengeParameters = {
	CODE_DELIVERY_DESTINATION?: string;
	CODE_DELIVERY_DELIVERY_MEDIUM?: string;
	requiredAttributes?: string;
	USER_ID_FOR_SRP?: string;
	SECRET_BLOCK?: string;
	PASSWORD_CLAIM_SIGNATURE?: string;
	MFAS_CAN_CHOOSE?: string;
} & { [Params: string]: unknown };

export type CognitoMFAType = 'SMS_MFA' | 'SOFTWARE_TOKEN_MFA';
