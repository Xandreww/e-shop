const Form = require('../models/form.model');

const formValidation = require('../utils/formValidation');

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
    const { name, address, email, delivery, payment } = req.fields;

    if (formValidation.validateForm(name, address, email, delivery, payment)) {
      const newForm = new Form({ ...req.fields });
      await newForm.save(); // ...save form in DB
      res.json(newForm);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
