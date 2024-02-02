Write-Host "PowerShell start working"

Get-ChildItem -Path . -Filter "node_modules" -Recurse | Remove-Item -Force -Recurse
Get-ChildItem -Path . -Filter ".nuxt" -Recurse | Remove-Item -Force -Recurse
Get-ChildItem -Path . -Filter ".turbo" -Recurse | Remove-Item -Force -Recurse