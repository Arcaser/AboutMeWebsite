# Preboot Script
# This script will be run before the computer is restarted
# It performs setup tasks such as renaming the computer, updating drivers, installing Windows updates, and downloading/installing software.

# Logging function
Function WriteToLog {
    param([string]$text)
    Write-Host $text
    $date = Get-Date
    $log = "C:\Windows\Temp\SetupLog.txt"
    $text = "$date - $text"
    Add-Content $log $text
}

# Script Initialization
Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned
Install-Module -Name PSWindowsUpdate -Force
Import-Module PSWindowsUpdate
# Add other necessary modules here

# Info Gathering
$ComputerName = Read-Host "Enter Company Initials"
WriteToLog "Computer name: $ComputerName"

# Rename computer
$serialNumber = (Get-WmiObject Win32_BIOS).SerialNumber
$newComputerName = "$ComputerName$serialNumber"
WriteToLog "Renaming computer to: $newComputerName"
Rename-Computer -NewName $newComputerName 
WriteToLog "Computer renamed successfully."

# Powercfg
WriteToLog "Setting power settings..."
powercfg /change monitor-timeout-ac 0
powercfg /change monitor-timeout-dc 0
powercfg /change standby-timeout-ac 0
powercfg /change standby-timeout-dc 0
WriteToLog "Power settings applied successfully."

# Checks if dcu-cli.exe exists
<#$dcuPath = "$env:ProgramFiles\Dell\CommandUpdate\d"
if ($true) {
    WriteToLog "Dell Command Update already installed. Running..."
    Start-Process -FilePath $dcuPath -ArgumentList "/driverInstall -silent" -Wait
    WriteToLog "Dell Command Update completed successfully."
} else {
    WriteToLog "Dell Command Update not found. Downloading and installing..."
    $dcuDownloadLink = "https://hgllc.sharepoint.com/:u:/s/HG_Team/ESrCaQwJOSlFq6QNHnNHH1EBYbofxjTDMzoWAYLXa5wUHg?e=AYX2I5&download=1"
    $dcuDownloadPath = "$env:TEMP\Dell-Command-Update-Application_8D5MC_WIN_4.3.0_A00_02.EXE"
    Invoke-WebRequest -Uri $dcuDownloadLink -OutFile $dcuDownloadPath
    WriteToLog "Dell Command Update downloaded successfully."

    WriteToLog "Installing Dell Command Update..."
    Start-Process -FilePath $dcuDownloadPath -ArgumentList "/S" -Wait
    Remove-Item -Path $dcuDownloadPath -Force
    WriteToLog "Dell Command Update installed successfully."
}
#>

# Drivers Update
WriteToLog "Updating drivers..."
# Assumes Dell
$directory = $pwd
cd "C:\Program Files (x86)\Dell\CommandUpdate"
./dcu-cli.exe /driverInstall -silent
cd $directory
WriteToLog "Drivers updated successfully."

# Windows Update
WriteToLog "Installing Windows updates..."
Install-WindowsUpdate -AcceptAll -ForceInstall
WriteToLog "Windows updates installed successfully."

# Download and Install Software
$chromeDL ="https://hgllc.sharepoint.com/:u:/s/HG_Team/EdD8Pey7vFNJo8tP2rZeHmoBHh1LWV3CTmkToKUzMmJNWg?e=NRtlca&download=1"
$adobeDL = "https://hgllc.sharepoint.com/:u:/s/HG_Team/EVhb4d9a-QRFlCkEWRY4CQwBJ6qNLlazLbV9r6PPQeixmA?e=IFRNhb&download=1"
$officeDL = "https://hgllc.sharepoint.com/:u:/s/HG_Team/EdTjHSy1iz1Hr7k_cZ-8OvsBfvrKMMYKuUy1-J-CSohadA?e=P8fuX7&download=1"
$agentDL = "https://hgllc.sharepoint.com/:u:/s/HG_Team/EWIVtWuvaIVKrhUehVAnxhsB-UQaFzIO0v2RbRrbWj1imQ?e=cH2t6A&download=1"


$officePath = "$env:ProgramFiles\office.exe"
$chromePath = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
$adobePath = "$env:ProgramFiles(x86)\Adobe\Acrobat Reader DC\Reader\AcroRd32.exe"
$agentPath = "$env:ProgramFiles\agent.exe"


# Download and install Chrome
WriteToLog "Downloading and installing Chrome..."
Invoke-WebRequest -Uri $chromeDL -OutFile "chrome_installer.exe"
Start-Process -FilePath ".\chrome_installer.exe" -ArgumentList "/silent /install" -Wait
Remove-Item -Path ".\chrome_installer.exe" -Force
if (Test-Path $chromePath) {
    WriteToLog "Chrome installed successfully."
} else {
    WriteToLog "Failed to install Chrome."
}
<#
# Download and install Adobe Reader
WriteToLog "Downloading and installing Adobe Reader..."
Invoke-WebRequest -Uri $adobeDL -OutFile "adobe_reader.exe"
Start-Process -FilePath ".\adobe_reader.exe" -ArgumentList "/sAll /rs" -Wait
Remove-Item -Path ".\adobe_reader.exe" -Force
if (Test-Path $adobePath) {
    WriteToLog "Adobe Reader installed successfully."
} else {
    WriteToLog "Failed to install Adobe Reader."
}
#>
#Download and Install Agent
WriteToLog "Downloading and installing Agent..."
Invoke-WebRequest -Uri $agentDL -OutFile $agentPath
Start-Process -FilePath $agentPath -ArgumentList "/S" -Wait
Remove-Item -Path $agentPath -Force
if (Test-Path $agentPath) {
    WriteToLog "Agent installed successfully."
} else {
    WriteToLog "Failed to install Agent."
}
<#
# Download and install Office
WriteToLog "Downloading and installing Office..."
Invoke-WebRequest -Uri $officeDL -OutFile "office_installer.exe"
Start-Process -FilePath ".\office_installer.exe" -ArgumentList "/S" -Wait
Remove-Item -Path ".\office_installer.exe" -Force
if (Test-Path $officePath) {
    WriteToLog "Office installed successfully."
} else {
    WriteToLog "Failed to install Office."
}
#>
WriteToLog "Finished with Setup"

