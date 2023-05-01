 ## Pre-req
az appservice plan create -g yourrg -n planstage1 --is-linux --sku P2V3 --location WestCentralUS
az webapp create --name yoursitename --plan planstage1 --resource-group yourrg --runtime NODE:18-lts
az webapp create --name yoursitename-dynamic --plan planstage1 --resource-group yourrg --runtime NODE:18-lts

## Deploy via zip

- create a zip file (check the zip content to rule out folder structure)
- run the following command

az webapp deployment source config-zip --resource-group yourrg --name yoursitename --src node-api-no-build.zip

ref : https://learn.microsoft.com/en-us/azure/app-service/deploy-run-package

### Option 2
az webapp deploy --resource-group yourrg --name yoursitename --src-path node-api-no-build.zip

This command is in preview and under development. Reference and support levels: https://aka.ms/CLI_refstatus
Deployment type: zip. To override deployment type, please specify the --type parameter. Possible values: war, jar, ear, zip, startup, script, static
Ref : https://learn.microsoft.com/en-us/azure/app-service/deploy-zip

## Dynamic build

az webapp create --name yoursitename-dynamic --plan planstage1 --resource-group yourrg --runtime NODE:18-lts

az webapp config appsettings set --resource-group yourrg --name yoursitename-dynamic --settings SCM_DO_BUILD_DURING_DEPLOYMENT=true

az webapp deploy --resource-group yourrg --name yoursitename-dynamic --src-path node-api-dynamic-build.zip
