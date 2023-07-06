const Room = require('../models/Room');
const roomsMock = require('../mock/rooms.json');
const Gallery = require('../models/Gallery');
const Avatars = require('../models/Avatars');
const News = require('../models/News');
const NewsPapers = require('../models/NewsPapers');
const Poems = require('../models/Poems');
const Sketches = require('../models/Sketches');
const Trustees = require('../models/Trustees');
const Regions = require('../models/Regions');
const Faces = require('../models/Faces');

const avatarsMock = require('../mock/avatars.json');
const galleryMock = require('../mock/gallery.json');
const newsMock = require('../mock/news.json');
const newsPapersMock = require('../mock/newsPapers.json');
const poemsMock = require('../mock/poems.json');
const sketchesMock = require('../mock/sketches.json');
const trusteesMock = require('../mock/trustees.json');
const regionsMock = require('../mock/regions.json');
const facesMock = require('../mock/faces.json');

module.exports = async () => {
    const rooms = await Room.find();
    if (rooms.length !== roomsMock.length) {
        await createInitialEntity(Room, roomsMock);
    }
    const photos = await Gallery.find();
    if (photos.length !== galleryMock.length) {
        await createInitialEntity(Gallery, galleryMock);
    }

    const avatars = await Avatars.find();
    if (avatars.length !== avatarsMock.length) {
        await createInitialEntity(Avatars, avatarsMock);
    }

    const news = await News.find();
    if (news.length !== newsMock.length) {
        await createInitialEntity(News, newsMock);
    }

    const newsPapers = await NewsPapers.find();
    if (newsPapers.length !== newsPapersMock.length) {
        await createInitialEntity(NewsPapers, newsPapersMock);
    }

    const poems = await Poems.find();
    if (poems.length !== poemsMock.length) {
        await createInitialEntity(Poems, poemsMock);
    }

    const sketches = await Sketches.find();
    if (sketches.length !== sketchesMock.length) {
        await createInitialEntity(Sketches, sketchesMock);
    }

    const trustees = await Trustees.find();
    if (trustees.length !== trusteesMock.length) {
        await createInitialEntity(Trustees, trusteesMock);
    }

    const regions = await Regions.find();
    if (regions.length !== regionsMock.length) {
        await createInitialEntity(Regions, regionsMock);
    }
    const faces = await Faces.find();
    if (faces.length !== facesMock.length) {
        await createInitialEntity(Faces, facesMock);
    }
};

async function createInitialEntity(Model, data) {
    await Model.collection.drop();
    return Promise.all(
        data.map(async (item) => {
            try {
                delete item._id;
                const newItem = new Model(item);
                await newItem.save();
                return newItem;
            } catch (error) {
                return error.message;
            }
        }),
    );
}
