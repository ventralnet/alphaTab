import { Settings } from '@src/Settings';
import { Beat } from '@src/model/Beat';
import { Score } from '@src/model/Score';
import { GpImporterTestHelper } from '@test/importer/GpImporterTestHelper';
import { expect } from 'chai';

describe('Gp5ImporterTest', () => {
    it('score-info', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/score-info.gp5');
        let score: Score = reader.readScore();
        expect(score.title).to.equal('Title');
        expect(score.subTitle).to.equal('Subtitle');
        expect(score.artist).to.equal('Artist');
        expect(score.album).to.equal('Album');
        expect(score.words).to.equal('Words');
        expect(score.music).to.equal('Music');
        expect(score.copyright).to.equal('Copyright');
        expect(score.tab).to.equal('Tab');
        expect(score.instructions).to.equal('Instructions');
        expect(score.notices).to.equal('Notice1\r\nNotice2');
        expect(score.masterBars.length).to.equal(5);
        expect(score.tracks.length).to.equal(2);
        expect(score.tracks[0].name).to.equal('Track 1');
        expect(score.tracks[1].name).to.equal('Track 2');
    });

    it('notes', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/notes.gp5');
        let score: Score = reader.readScore();
        GpImporterTestHelper.checkNotes(score);
    });

    it('time-signatures', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/time-signatures.gp5');
        let score: Score = reader.readScore();
        GpImporterTestHelper.checkTimeSignatures(score);
    });

    it('dead', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/dead.gp5');
        let score: Score = reader.readScore();
        GpImporterTestHelper.checkDead(score);
    });

    it('grace', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/grace.gp5');
        let score: Score = reader.readScore();
        GpImporterTestHelper.checkGrace(score);
    });

    it('accentuations', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/accentuations.gp5');
        let score: Score = reader.readScore();
        GpImporterTestHelper.checkAccentuations(score, true);
    });

    it('harmonics', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/harmonics.gp5');
        let score: Score = reader.readScore();
        GpImporterTestHelper.checkHarmonics(score);
    });

    it('hammer', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/hammer.gp5');
        let score: Score = reader.readScore();
        GpImporterTestHelper.checkHammer(score);
    });

    it('bend', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/bends.gp5');
        let score: Score = reader.readScore();
        GpImporterTestHelper.checkBend(score);
    });

    it('tremolo', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/tremolo.gp5');
        let score: Score = reader.readScore();
        GpImporterTestHelper.checkTremolo(score);
    });

    it('slides', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/slides.gp5');
        let score: Score = reader.readScore();
        GpImporterTestHelper.checkSlides(score);
    });

    it('vibrato', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/vibrato.gp5');
        let score: Score = reader.readScore();
        GpImporterTestHelper.checkVibrato(score, true);
    });

    it('trills', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/trills.gp5');
        let score: Score = reader.readScore();
        GpImporterTestHelper.checkTrills(score);
    });

    it('other-effects', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/other-effects.gp5');
        let score: Score = reader.readScore();
        GpImporterTestHelper.checkOtherEffects(score, false);
    });

    it('fingering', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/fingering.gp5');
        let score: Score = reader.readScore();
        GpImporterTestHelper.checkFingering(score);
    });

    it('stroke', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/strokes.gp5');
        let score: Score = reader.readScore();
        GpImporterTestHelper.checkStroke(score);
    });

    it('tuplets', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/tuplets.gp5');
        let score: Score = reader.readScore();
        GpImporterTestHelper.checkTuplets(score);
    });

    it('ranges', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/ranges.gp5');
        let score: Score = reader.readScore();
        GpImporterTestHelper.checkRanges(score);
    });

    it('effects', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/effects.gp5');
        let score: Score = reader.readScore();
        GpImporterTestHelper.checkEffects(score);
    });

    it('serenade', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/serenade.gp5');
        reader.readScore();
        // only Check reading
    });

    it('strings', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/strings.gp5');
        let score: Score = reader.readScore();
        GpImporterTestHelper.checkStrings(score);
    });

    it('key-signatures', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/key-signatures.gp5');
        let score: Score = reader.readScore();
        GpImporterTestHelper.checkKeySignatures(score);
    });

    it('chords', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/chords.gp5');
        let score: Score = reader.readScore();
        GpImporterTestHelper.checkChords(score);
    });

    it('colors', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/colors.gp5');
        let score: Score = reader.readScore();
        GpImporterTestHelper.checkColors(score);
    });

    it('alternate-endings-section-error', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/alternate-endings-section-error.gp5');
        const score: Score = reader.readScore();
        expect(score.masterBars.length).to.be.equal(2);
        expect(score.masterBars[1].alternateEndings).to.be.equal(4);
        expect(score.masterBars[1].section).to.be.ok;
        expect(score.masterBars[1].section?.text).to.be.equal("Outro");
    });

    it('canon', async () => {
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/canon.gp5');
        let score: Score = reader.readScore();
        expect(score.title).to.equal('Canon Rock');
        expect(score.subTitle).to.equal('');
        expect(score.artist).to.equal('JerryC');
        expect(score.album).to.equal('');
        expect(score.words).to.equal('');
        expect(score.music).to.equal('JerryC');
        expect(score.copyright).to.equal('');
        expect(score.tab).to.equal('');
        expect(score.instructions).to.equal('');
        expect(score.notices).to.equal('');
        expect(score.masterBars.length).to.equal(224);
        expect(score.tracks.length).to.equal(9);
        expect(score.tracks[0].name).to.equal('Guitar Player');
        expect(score.tracks[1].name).to.equal('Low Bassy Sound');
        expect(score.tracks[2].name).to.equal('High Soundy Thing');
        expect(score.tracks[3].name).to.equal('Second Guitar');
        expect(score.tracks[4].name).to.equal('Drums');
        expect(score.tracks[5].name).to.equal('Harmonizer');
        expect(score.tracks[6].name).to.equal('The clean guitar');
        expect(score.tracks[7].name).to.equal('Track 8');
        expect(score.tracks[8].name).to.equal('Percussion');
    });
    it('beat-text-lyrics', async () => {
        const settings = new Settings();
        settings.importer.beatTextAsLyrics = true;
        const reader = await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/beat-text-lyrics.gp5', settings);
        let score: Score = reader.readScore();

        const expectedChunks: string[] = [
            "",
            "So", "close,",
            "no", "mat", "ter", "how", "", "far.", 
            "", "", 
            "Could-", "n't", "be", "much", "more", "from", "the", "", "heart.", 
            "", "", "", "", 
            "For-", "ev-", "er", "trust-", "ing", "who", "we", "are.", 
            "", "", "", "", "", "", 
            "And", "noth-", "ing", "else", "", 
            "mat-", "ters.", "", ""
        ];

        let beat: Beat | null = score.tracks[0].staves[0].bars[0].voices[0].beats[0];
        const actualChunks: string[] = [];
        while (beat != null) {
            if (beat.lyrics) {
                actualChunks.push(beat.lyrics[0]);
            } else {
                actualChunks.push('');
            }
            beat = beat.nextBeat;
        }

        expect(actualChunks.join(';')).to.equal(expectedChunks.join(';'));
    });

    it('layout-configuration', async () => {
        const track1 = (await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/layout-configuration-multi-track-1.gp5')).readScore();
        const track2 = (await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/layout-configuration-multi-track-2.gp5')).readScore();
        const trackAll = (await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/layout-configuration-multi-track-all.gp5')).readScore();
        const track1And3 = (await GpImporterTestHelper.prepareImporterWithFile('guitarpro5/layout-configuration-multi-track-1-3.gp5')).readScore();

        GpImporterTestHelper.checkMultiTrackLayoutConfiguration(
            track1, 
            track2,
            trackAll,
            track1And3
        );
    });

});
