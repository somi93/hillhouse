$base  = "h:\projects\enigma-projects\hill_house\public"
$csv   = "h:\projects\enigma-projects\hill_house\image-resize.csv"
$lines = Get-Content $csv
$done=0; $skip=0; $fail=0; $missing=0

foreach ($line in $lines) {
    if ([string]::IsNullOrWhiteSpace($line)) { continue }
    $parts = $line -split "`t|,"
    if ($parts.Count -lt 3) { continue }

    $srcRel  = $parts[0].Trim()
    $destRel = $parts[1].Trim()
    $size    = $parts[2].Trim()

    $src  = Join-Path $base $srcRel
    $dest = Join-Path $base $destRel

    if (-not (Test-Path $src)) {
        Write-Host "MISSING  $srcRel"
        $missing++
        continue
    }
    if (Test-Path $dest) {
        $skip++
        continue
    }

    $wh = $size -split "x"
    $w  = $wh[0]
    $h  = $wh[1]

    $dir = Split-Path $dest -Parent
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }

    $result = & ffmpeg -y -i $src -vf "scale=${w}:${h}:force_original_aspect_ratio=increase,crop=${w}:${h}" -q:v 3 $dest 2>&1

    if (Test-Path $dest) {
        Write-Host "OK   $destRel"
        $done++
    } else {
        Write-Host "FAIL $destRel"
        Write-Host ($result -join "`n") | Select-Object -First 5
        $fail++
    }
}

Write-Host ""
Write-Host "============================="
Write-Host "Done:    $done"
Write-Host "Skipped: $skip"
Write-Host "Missing: $missing"
Write-Host "Failed:  $fail"
