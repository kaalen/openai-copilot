param name string
param location string = resourceGroup().location
param tags object = {}
param sku string = ''
param isGovCloudDeployment bool  

resource cognitiveService 'Microsoft.CognitiveServices/accounts@2023-05-01' = if (!isGovCloudDeployment) {
  name: name
  location: location
  tags: tags
  sku: {
    name: sku
  }
  kind: 'CognitiveServices'
  properties: {
    apiProperties: {
      statisticsEnabled: false
    }
  }
}

//Additional resouce to handle the api version parody issue.  
resource cognitiveServiceGov 'Microsoft.CognitiveServices/accounts@2022-12-01' = if (isGovCloudDeployment) {
  name: name
  location: location
  tags: tags
  sku: {
    name: sku
  }
  kind: 'CognitiveServices'
  properties: {
    apiProperties: {
      statisticsEnabled: false
    }
  }
}


output cognitiveServicerAccountName string = (isGovCloudDeployment) ? cognitiveServiceGov.name : cognitiveService.name
output cognitiveServiceID string = (isGovCloudDeployment) ? cognitiveServiceGov.id : cognitiveService.id
output cognitiveServiceEndpoint string = (isGovCloudDeployment) ? cognitiveServiceGov.properties.endpoint : cognitiveService.properties.endpoint
#disable-next-line outputs-should-not-contain-secrets
output cognitiveServiceAccountKey string = (isGovCloudDeployment) ? cognitiveServiceGov.listKeys().key1 : cognitiveService.listKeys().key1
