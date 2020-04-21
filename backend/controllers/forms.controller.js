const Form = require('../models/form.model');

exports.getForms = async (req, res) => {
  try {
    const result = await Form.find();
    if (!result) res.status(404).json({ form: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getId = async (req, res) => {
  try {
    const result = await Form.findById(req.params.id);
    if (!result) res.status(404).json({ form: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.add = async (req, res) => {
  try {
    const { name, address, email, delivery, payment, comment } = req.fields;

    const newForm = new Form({ name, address, email, delivery, payment, comment });
    await newForm.save(); // ...save form in DB
    res.json(newForm);
  } catch (err) {
    res.status(500).json(err);
  }
};
