{
    "$schema": "http://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "parameters": {
        "name": {
            "type": "String"
        },
        "type": {
            "type": "String"
        },
        "regionId": {
            "type": "String"
        },
        "tagsArray": {
            "type": "Object"
        },
        "requestSource": {
            "type": "String"
        },
        "workspaceResourceId": {
            "type": "String"
        }
    },
    "resources": [
        {
            "type": "microsoft.insights/components",
            "apiVersion": "2020-02-02-preview",
            "name": "[parameters('name')]",
            "location": "[parameters('regionId')]",
            "dependsOn": [
                "newWorkspaceTemplate"
            ],
            "tags": "[parameters('tagsArray')]",
            "properties": {
                "ApplicationId": "[parameters('name')]",
                "Application_Type": "[parameters('type')]",
                "Flow_Type": "Redfield",
                "Request_Source": "[parameters('requestSource')]",
                "WorkspaceResourceId": "[parameters('workspaceResourceId')]"
            }
        },
        {
            "type": "Microsoft.Resources/deployments",
            "apiVersion": "2019-10-01",
            "name": "newWorkspaceTemplate",
            "properties": {
                "mode": "Incremental",
                "template": {
                    "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
                    "contentVersion": "1.0.0.0",
                    "parameters": {},
                    "variables": {},
                    "resources": [
                        {
                            "apiVersion": "2020-08-01",
                            "name": "DefaultWorkspace-f1d68e53-b4de-410e-a6bc-a5170352bb64-CNN3",
                            "type": "Microsoft.OperationalInsights/workspaces",
                            "location": "chinanorth3",
                            "properties": {}
                        }
                    ]
                }
            },
            "subscriptionId": "f1d68e53-b4de-410e-a6bc-a5170352bb64",
            "resourceGroup": "DefaultResourceGroup-CNN3"
        }
    ]
}