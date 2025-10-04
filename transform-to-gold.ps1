# Gold Theme Transformation Script
# Replaces emerald/purple color scheme with sophisticated black/grey/gold palette

$files = @(
    "app/page.tsx",
    "app/tiers/foundation/page.tsx",
    "app/tiers/estate/page.tsx",
    "app/tiers/architect/page.tsx",
    "app/packages/foundation/page.tsx",
    "app/packages/estate/page.tsx",
    "app/packages/architect/page.tsx",
    "app/start-project/page.tsx"
)

$replacements = @{
    # Emerald to Gold
    'emerald-400' = 'amber-500'
    'emerald-300' = 'amber-400'
    'emerald-500' = 'amber-600'
    'text-emerald-400' = 'text-amber-500'
    'text-emerald-300' = 'text-amber-400'
    'bg-emerald-400' = 'bg-amber-500'
    'bg-emerald-300' = 'bg-amber-400'
    'border-emerald-400' = 'border-amber-500'
    'border-emerald-300' = 'border-amber-400'
    'from-emerald-400' = 'from-amber-500'
    'to-emerald-400' = 'to-amber-500'
    'hover:bg-emerald-300' = 'hover:bg-amber-400'
    'hover:bg-emerald-400' = 'hover:bg-amber-500'
    'hover:text-emerald-300' = 'hover:text-amber-400'
    'hover:text-emerald-400' = 'hover:text-amber-500'
    'hover:border-emerald-300' = 'hover:border-amber-400'
    'hover:border-emerald-400' = 'hover:border-amber-500'
    'shadow-emerald-400' = 'shadow-amber-500'
    'group-hover:bg-emerald-300' = 'group-hover:bg-amber-400'
    'group-hover:text-emerald-300' = 'group-hover:text-amber-400'
    'group-hover:text-emerald-400' = 'group-hover:text-amber-500'
    
    # Purple to Gold (for premium tier)
    'purple-400' = 'amber-600'
    'purple-300' = 'amber-500'
    'purple-500' = 'amber-700'
    'text-purple-400' = 'text-amber-600'
    'bg-purple-400' = 'bg-amber-600'
    'border-purple-400' = 'border-amber-600'
    'from-purple-400' = 'from-amber-600'
    'to-purple-400' = 'to-amber-600'
    'hover:bg-purple-300' = 'hover:bg-amber-500'
    'hover:text-purple-400' = 'hover:text-amber-600'
    'hover:border-purple-400' = 'hover:border-amber-600'
    'shadow-purple-400' = 'shadow-amber-600'
    'group-hover:text-purple-400' = 'group-hover:text-amber-600'
    
    # Pink to lighter gold
    'pink-400' = 'amber-400'
    'pink-300' = 'amber-300'
    'text-pink-400' = 'text-amber-400'
    'bg-pink-400' = 'bg-amber-400'
    'border-pink-400' = 'border-amber-400'
    'from-pink-400' = 'from-amber-400'
    'to-pink-400' = 'to-amber-400'
    
    # Blue to grey
    'blue-400' = 'slate-400'
    'blue-300' = 'slate-300'
    'text-blue-400' = 'text-slate-400'
    'bg-blue-400' = 'bg-slate-400'
    'border-blue-400' = 'border-slate-400'
}

foreach ($file in $files) {
    $path = Join-Path $PSScriptRoot $file
    if (Test-Path $path) {
        $content = Get-Content $path -Raw
        $originalContent = $content
        
        foreach ($old in $replacements.Keys) {
            $new = $replacements[$old]
            $content = $content -replace [regex]::Escape($old), $new
        }
        
        if ($content -ne $originalContent) {
            Set-Content -Path $path -Value $content -NoNewline
            Write-Host "✓ Updated: $file" -ForegroundColor Green
        } else {
            Write-Host "- No changes: $file" -ForegroundColor Gray
        }
    } else {
        Write-Host "✗ Not found: $file" -ForegroundColor Red
    }
}

Write-Host "`n✨ Gold theme transformation complete!" -ForegroundColor Yellow
