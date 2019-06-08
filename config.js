export default {
    app: {
        token: "0738b665287443afb2eb04fd0f5f979d", // <- enter your token here
        muted: false, // <- mute microphone by default
        googleIt: true // <- ask users to google their request, in case of input.unknown action
    },
    locale: {
        strings: {
            welcomeTitle: "{WELCOMETITLE}",
            welcomeDescription: `{WELCOME_DESCRIPTION}`,
            offlineTitle: "Oh, no!",
            offlineDescription: "It looks like you are not connected to the internet, this webpage requires internet connection, to process your requests",
            queryTitle: "Ask me something...",
            voiceTitle: "Go ahead, im listening..."
        },
        settings: {
            speechLang: "nl-NL", // <- output language
            recognitionLang: "nl-NL" // <- input(recognition) language
        }
    }
}