const Footer = require("../../models/v1/footer.model");

exports.getFooter = async (req, res) => {
  try {
    const footer = await Footer.findOne({});
    res.json(footer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createFooter = async (req, res) => {
  try {
    const newFooter = new Footer(req.body);
    const savedFooter = await newFooter.save();
    res.json(savedFooter);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateFooter = async (req, res) => {
    const id = req.params.id;
    if(!id){
        res.status(404)
            .json({
              success: false,
              details: "Id is required!"   
            })
    }
  try {
    const updatedFooter = await Footer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedFooter);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteFooter = async (req, res) => {
  try {
    await Footer.findByIdAndDelete(req.params.id);
    res.json({ message: 'Footer deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
