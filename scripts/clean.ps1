Write-Host "PowerShell start working"

Get-ChildItem -Path . -Filter "node_modules" -Recurse | Remove-Item -Force -Recurse