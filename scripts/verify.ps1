$ErrorActionPreference = 'Continue'
Write-Output '=== images ref folder ==='
Get-ChildItem -Path 'images ref' | Sort-Object Name | ForEach-Object { Write-Output $_.Name }
Write-Output ''
Write-Output '=== public/images folder ==='
Get-ChildItem -Path 'public/images' | Sort-Object Name | ForEach-Object { Write-Output $_.Name }
