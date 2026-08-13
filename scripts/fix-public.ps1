# PowerShell script to standardize public/images extensions to .jpg
$ErrorActionPreference = 'Stop'
$dir = 'public/images'

function Ensure-Jpg {
  param($pngName)
  $png = Join-Path $dir $pngName
  $jpg = Join-Path $dir ($pngName -replace '\.png$', '.jpg')
  if (Test-Path $png) {
    if (Test-Path $jpg) {
      Write-Output ('JPG already exists, removing PNG: ' + $pngName)
      Remove-Item -Path $png
    } else {
      Write-Output ('Renaming ' + $pngName + ' -> ' + (Split-Path $jpg -Leaf))
      Rename-Item -Path $png -NewName (Split-Path $jpg -Leaf)
    }
  } else {
    Write-Output ('PNG not found (skip): ' + $pngName)
  }
}

Write-Output '=== Standardizing public/images to .jpg ==='
Ensure-Jpg 'hero-id-card.png'
Ensure-Jpg 'flyer-oma-chioma.png'

Write-Output ''
Write-Output '=== Final public/images listing ==='
Get-ChildItem -Path $dir -File | Sort-Object Name | ForEach-Object { Write-Output $_.Name }
