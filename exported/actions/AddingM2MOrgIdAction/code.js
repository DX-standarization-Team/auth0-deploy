/**
* Handler that will be called during the execution of a Client Credentials exchange.
*
* @param {Event} event - Details about client credentials grant request.
* @param {CredentialsExchangeAPI} api - Interface whose methods can be used to change the behavior of client credentials grant.
*/
exports.onExecuteCredentialsExchange = async (event, api) => {
  console.log(event.client)
  try {
    if(event.client.metadata && event.client.metadata.org_id){ // ManagementAPIは設定がないから条件式追加
      let org_id = event.client.metadata.org_id;
      console.log('Fetching client metadata succeeded. m2m_org_id: ' + org_id + ' will be set in the access token');
      api.accessToken.setCustomClaim("m2m_org_id", org_id);
    }
  } catch (e) {
    console.log('Fetching client metadata failed. reason: ' + e);
  }
};
