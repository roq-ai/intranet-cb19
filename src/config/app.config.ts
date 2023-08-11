interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Employee', 'Manager', 'HR Representative', 'IT Support'],
  tenantName: 'Organization',
  applicationName: 'Intranet',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
