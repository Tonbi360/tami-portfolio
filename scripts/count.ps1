$ErrorActionPreference = 'Continue'
$files = Get-ChildItem -Path 'images ref' -Filter '*.jpg'
Write-Output ('TOTAL JPG FILES: ' + $files.Count)
$originals = $files | Where-Object { $_.Name -like 'Generated Image*' }
$renamed = $files | Where-Object { $_.Name -notlike 'Generated Image*' }
Write-Output ('ORIGINAL-STYLE FILES: ' + $originals.Count)
Write-Output ('RENAMED FILES: ' + $renamed.Count)
Write-Output '--- renamed ---'
$renamed | Sort-Object Name | ForEach-Object { Write-Output $_.Name }
