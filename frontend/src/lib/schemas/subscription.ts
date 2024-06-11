/* eslint-disable @typescript-eslint/no-unused-vars */
/* Auto generated by https://transform.tools/typescript-to-zod */
/* NOTE: Contraints are manually added */

import { z } from "zod";

export const aNInformationSchema = z.object({
  IPAddress: z.string(),
  TEID: z.number(),
});

export const amPolicyDataSchema = z.object({
  subscCats: z.array(z.string()).optional(),
});

export const arpSchema = z.object({
  priorityLevel: z.number(),
  preemptCap: z.string(),
  preemptVuln: z.string(),
});

export const chargingDataSchema = z.object({
  snssai: z.string().optional(),
  dnn: z.string(),
  qosRef: z.number().optional(),
  filter: z.string(),
  chargingMethod: z.string().optional(),
  quota: z.string().optional(),
  unitCost: z.string().optional(),
  ueId: z.string().optional(),
});

export const dnnSchema = z.object({
  dnn: z.string(),
});

export const flowChargingRecordSchema = z.object({
  Supi: z.string(),
  Snssai: z.string(),
  Dnn: z.string(),
  Filter: z.string(),
  QuotaLeft: z.string(),
  Usage: z.string(),
  TotalVol: z.string(),
  UlVol: z.string(),
  DlVol: z.string(),
});

export const flowRulesSchema = z.object({
  filter: z.string().optional(),
  precedence: z.number().optional(),
  snssai: z.string().optional(),
  dnn: z.string().optional(),
  qosRef: z.number().optional(),
});

export const ipAddressSchema = z.object({
  ipv4Addr: z.string().optional(),
  ipv6Addr: z.string().optional(),
  ipv6Prefix: z.string().optional(),
});

export const metaSchema = z.object({
  next: z.string().optional(),
  prev: z.string().optional(),
  limit: z.number().optional(),
  total: z.number().optional(),
});

export const milenageOpSchema = z.object({
  opValue: z.string(),
  encryptionKey: z.number(),
  encryptionAlgorithm: z.number(),
});

export const model5gQosProfileSchema = z.object({
  "5qi": z.number(),
  arp: arpSchema,
  priorityLevel: z.number().optional(),
});

export const nssaiSchema = z.object({
  sst: z.number(),
  sd: z.string().optional(),
});

export const opcSchema = z.object({
  opcValue: z.string(),
  encryptionKey: z.number(),
  encryptionAlgorithm: z.number(),
});

export const pduSessionSchema = z.object({
  Dnn: z.string(),
  PduSessionId: z.string(),
  Sd: z.string(),
  SmContextRef: z.string(),
  Sst: z.string(),
});

export const pduSessionTypesSchema = z.object({
  defaultSessionType: z.string(),
  allowedSessionTypes: z.array(z.string()).optional(),
});

export const permanentKeySchema = z.object({
  permanentKeyValue: z.string().regex(/^[A-Fa-f0-9]+$/), // hex string
  encryptionKey: z.number(),
  encryptionAlgorithm: z.number(),
});

export const qosFlowsSchema = z.object({
  snssai: z.string(),
  dnn: z.string(),
  qosRef: z.number(),
  "5qi": z.number(),
  mbrUL: z.string().optional(),
  mbrDL: z.string().optional(),
  gbrUL: z.string().optional(),
  gbrDL: z.string().optional(),
});

export const sessionAmbrSchema = z.object({
  uplink: z.string(),
  downlink: z.string(),
});

export const sessionRuleSchema = z.object({
  sessRuleId: z.string(),
});

export const smPolicySnssaiSchema = z.object({
  snssai: nssaiSchema,
  smPolicyDnnData: z.record(dnnSchema).optional(),
});

export const sscModesSchema = z.object({
  defaultSscMode: z.string(),
  allowedSscModes: z.array(z.string()).optional(),
});

export const subscribedSnssaiInfoSchema = z.object({
  dnnInfos: z.array(dnnSchema),
});

export const subscribedUeAmbrSchema = z.object({
  uplink: z.string(),
  downlink: z.string(),
});

export const subscriberSchema = z.object({
  plmnID: z.string(),
  ueId: z.string(),
  gpsi: z.string(),
});

export const tenantSchema = z.object({
  tenantId: z.string().optional(),
  tenantName: z.string(),
});

export const tunnelSchema = z.object({
  ANInformation: aNInformationSchema,
  DataPathPool: z.any(),
  PathIDGenerator: z.any(),
});

export const ueContextSchema = z.object({
  AccessType: z.string(),
  CmState: z.string(),
  Guti: z.string(),
  Mcc: z.string(),
  Mnc: z.string(),
  PduSessions: z.array(pduSessionSchema),
  Supi: z.string(),
  Tac: z.string(),
});

export const upSecuritySchema = z.object({
  upIntegr: z.string(),
  upConfid: z.string(),
});

export const userSchema = z.object({
  userId: z.string().optional(),
  tenantId: z.string().optional(),
  email: z.string(),
  encryptedPassword: z.string(),
});

export const defaultSingleNssaisSchema = z.object({
  defaultSingleNssais: z.array(nssaiSchema),
  singleNssais: z.array(nssaiSchema).optional(),
});

export const dnnConfigurationSchema = z.object({
  pduSessionTypes: pduSessionTypesSchema,
  sscModes: sscModesSchema,
  "5gQosProfile": model5gQosProfileSchema.optional(),
  sessionAmbr: sessionAmbrSchema.optional(),
  staticIpAddress: z.array(ipAddressSchema).optional(),
  upSecurity: upSecuritySchema.optional(),
});

export const milenageSchema = z.object({
  op: milenageOpSchema.optional(),
});

export const pduSessionInfoSchema = z.object({
  AnType: z.string(),
  Dnn: z.string(),
  LocalSEID: z.string().optional(),
  PDUAddress: z.string(),
  PDUSessionID: z.string(),
  RemoteSEID: z.string().optional(),
  Sd: z.string(),
  SessionRule: sessionRuleSchema,
  Sst: z.string(),
  Supi: z.string(),
  Tunnel: tunnelSchema,
  UpCnxState: z.string(),
});

export const sessionManagementSubscriptionDataSchema = z.object({
  singleNssai: nssaiSchema,
  dnnConfigurations: z.record(dnnConfigurationSchema).optional(),
});

export const smPolicyDataSchema = z.object({
  smPolicySnssaiData: z.record(smPolicySnssaiSchema),
});

export const smfSelectionSubscriptionDataSchema = z.object({
  subscribedSnssaiInfos: z.record(subscribedSnssaiInfoSchema).optional(),
});

export const accessAndMobilitySubscriptionDataSchema = z.object({
  gpsis: z.array(z.string()).optional(),
  subscribedUeAmbr: subscribedUeAmbrSchema.optional(),
  nssai: defaultSingleNssaisSchema.optional(),
});

export const authenticationSubscriptionSchema = z.object({
  authenticationMethod: z.enum(["5G_AKA", "EAP_AKA_PRIME"]),
  permanentKey: permanentKeySchema,
  sequenceNumber: z.string().regex(/^[A-Fa-f0-9]{12}$/), // 48 bit hex string
  authenticationManagementField: z.string().regex(/^[A-Fa-f0-9]{4}$/), // 16 bit hex string
  milenage: milenageSchema.optional(),
  opc: opcSchema.optional(),
});

export const subscriptionSchema = z.object({
  userNumber: z.number().positive().int().optional(),
  plmnID: z.string().length(5),
  ueId: z.string().length(20).startsWith("imsi-"),
  AuthenticationSubscription: authenticationSubscriptionSchema,
  AccessAndMobilitySubscriptionData: accessAndMobilitySubscriptionDataSchema,
  SessionManagementSubscriptionData: z.array(sessionManagementSubscriptionDataSchema),
  SmfSelectionSubscriptionData: smfSelectionSubscriptionDataSchema,
  AmPolicyData: amPolicyDataSchema,
  SmPolicyData: smPolicyDataSchema,
  FlowRules: z.array(flowRulesSchema),
  QosFlows: z.array(qosFlowsSchema),
  ChargingDatas: z.array(chargingDataSchema),
});