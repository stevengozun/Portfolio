Add-Type -AssemblyName System.Drawing

$W = 1200
$H = 630

$bmp = New-Object System.Drawing.Bitmap($W, $H)
$g   = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode     = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

# --- background -----------------------------------------------------------
$bg = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 10, 10, 15))
$g.FillRectangle($bg, 0, 0, $W, $H)

# --- soft purple glow (top-left) -----------------------------------------
$glow1Path = New-Object System.Drawing.Drawing2D.GraphicsPath
$glow1Path.AddEllipse(120, 40, 620, 620)
$glow1 = New-Object System.Drawing.Drawing2D.PathGradientBrush($glow1Path)
$glow1.CenterColor    = [System.Drawing.Color]::FromArgb(150, 124, 58, 237)
$glow1.SurroundColors = @([System.Drawing.Color]::FromArgb(0, 124, 58, 237))
$g.FillPath($glow1, $glow1Path)

# --- soft cyan glow (bottom-right) ---------------------------------------
$glow2Path = New-Object System.Drawing.Drawing2D.GraphicsPath
$glow2Path.AddEllipse(580, 180, 560, 560)
$glow2 = New-Object System.Drawing.Drawing2D.PathGradientBrush($glow2Path)
$glow2.CenterColor    = [System.Drawing.Color]::FromArgb(120, 6, 182, 212)
$glow2.SurroundColors = @([System.Drawing.Color]::FromArgb(0, 6, 182, 212))
$g.FillPath($glow2, $glow2Path)

# --- "RG" wordmark (white) -----------------------------------------------
$logoFont = New-Object System.Drawing.Font('Segoe UI', 320, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$sfCenter = New-Object System.Drawing.StringFormat
$sfCenter.Alignment     = [System.Drawing.StringAlignment]::Center
$sfCenter.LineAlignment = [System.Drawing.StringAlignment]::Center

$rgBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::White)
$rgRect  = New-Object System.Drawing.RectangleF(0, 30, [single]$W, [single]($H - 180))
$g.DrawString('RG', $logoFont, $rgBrush, $rgRect, $sfCenter)

# --- accent dot (purple) sized/placed beside "RG" ------------------------
$rgSize    = $g.MeasureString('RG', $logoFont)
$dotFont   = New-Object System.Drawing.Font('Segoe UI', 320, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$dotBrush  = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 167, 139, 250))
$dotX      = [single](($W / 2) + ($rgSize.Width / 2) - 40)
$dotY      = [single](30 + (($H - 180) / 2) - 60)
$dotRect   = New-Object System.Drawing.RectangleF($dotX, $dotY, [single]120, [single]300)
$g.DrawString('.', $dotFont, $dotBrush, $dotRect, $sfCenter)

# --- name (subtle white) -------------------------------------------------
$nameFont  = New-Object System.Drawing.Font('Segoe UI', 42, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$nameBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(230, 255, 255, 255))
$nameRect  = New-Object System.Drawing.RectangleF(0, [single]($H - 140), [single]$W, [single]60)
$g.DrawString('Roi Steven Gozun', $nameFont, $nameBrush, $nameRect, $sfCenter)

# --- role line (accent) --------------------------------------------------
$roleFont  = New-Object System.Drawing.Font('Segoe UI', 24, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$roleBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(200, 167, 139, 250))
$roleRect  = New-Object System.Drawing.RectangleF(0, [single]($H - 80), [single]$W, [single]40)
$g.DrawString('Designer  -  Developer  -  Creator', $roleFont, $roleBrush, $roleRect, $sfCenter)

# --- save ----------------------------------------------------------------
$out = Join-Path $PSScriptRoot '..\assets\og-image.png'
$out = [System.IO.Path]::GetFullPath($out)
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()

Write-Output "Saved: $out"
Write-Output ("Size:  {0:N0} bytes" -f (Get-Item $out).Length)
