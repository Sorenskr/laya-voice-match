@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo 正在启动 Laya 语音匹配网页服务...
echo 电脑本地访问: http://localhost:8088
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /i "IPv4"') do (
    echo 手机局域网访问: http://%%a:8088
)
npx --yes serve -l 8088 .
pause

