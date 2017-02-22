/**
 * Review settings
 */
export class Settings {

    jlptLevel: string;
    normal: boolean;
    teForm: boolean;
    iAdjective: boolean;
    volitional: boolean;
    taiForm: boolean;
    leaveOutSuru: boolean;
    polite: boolean;
    plain: boolean;
    past: boolean;
    nonPast: boolean;
    positive: boolean;
    negative: boolean;

    constructor() {
    }

    static getDefault(): Settings {
        const settings = new Settings();
        settings.jlptLevel = 'n5';
        settings.normal = true;
        settings.teForm = true;
        settings.iAdjective = false;
        settings.volitional = false;
        settings.taiForm = false;
        settings.leaveOutSuru = true;
        settings.polite = false;
        settings.plain = true;
        settings.past = true;
        settings.nonPast = true;
        settings.positive = true;
        settings.negative = true;

        return settings;

    }
}
