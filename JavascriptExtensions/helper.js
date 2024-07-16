const json_settings = readtextfile("./DashTemplates/Donutz iRacing Session Dashboard/JavascriptExtensions/settings.json")
const settings = JSON.parse(json_settings);

function returnSettings() {
	return settings;
}

function filterProfilesBySessionType(data, sessionType) {
            const lowerCaseSessionType = sessionType.toLowerCase();
            return data.IRacing.Profiles.filter(profile =>
                profile.SessionTypes.some(type => type.toLowerCase() === lowerCaseSessionType)
            );
        }