iphone6:
	ionic cordova run ios -- --buildFlag="-UseModernBuildSystem=0" --target "iPhone-6" -l

se:
	ionic cordova emulate ios -- --buildFlag="-UseModernBuildSystem=0" --target "iPhone-SE" -l

iphone:
	ionic cordova emulate ios -l

ios:
	ionic cordova run ios -l

android:
	ionic cordova run android -l

ios-prod:
	ionic cordova run ios

build:
	ionic cordova build ios --prod


git:
	git add . && git commit -m $(m) && git push