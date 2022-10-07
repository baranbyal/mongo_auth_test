exports.allAccess = (req, res) => {
    res.status(200).send('Public Content.');
};

exports.userBoard = (req, res) => {
    res.status(200).send('User Content.');
};

exports.adminBoard = (req, res) => {
    res.status(200).send('Admin Content.');
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send('Moderator Content.');
};

exports.ykBoard = (req, res) => {
    res.status(200).send('YK Content.');
};

exports.ddkBoard = (req, res) => {
    res.status(200).send('DDK Content.');
};

exports.latinEgitmenBoard = (req, res) => {
    res.status(200).send('Latin Eğitmen Content.');
};

exports.dansciUyeBoard = (req, res) => {
    res.status(200).send('Dansçı Üye Content.');
};





