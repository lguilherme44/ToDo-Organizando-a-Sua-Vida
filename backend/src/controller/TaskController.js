const Task = require('../model/Task.js');
const {
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
} = require('date-fns');
const current = new Date();

class TaskController {
  async store(req, res) {
    const task = new Task(req.body);

    await task
      .save()
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  }

  async update(req, res) {
    await Task.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  }

  async all(req, res) {
    await Task.find({ macaddress: { $in: req.params.macaddress } })
      .sort({ when: -1 })
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  }

  async show(req, res) {
    await Task.findById(req.params.id)
      .then((response) => {
        if (response) return res.status(200).json(response);
        else return res.status(404).json({ error: 'Tarefa não encontrada' });
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  }

  async delete(req, res) {
    await Task.deleteOne({ _id: req.params.id })
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  }

  async done(req, res) {
    await Task.findByIdAndUpdate(
      { _id: req.params.id },
      { done: req.params.done },
      { new: true }
    )
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  }

  async late(req, res) {
    await Task.find({
      when: { $lt: current },
      macaddress: { $in: req.params.macaddress },
    })
      .sort('when')
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  }

  async today(req, res) {
    await Task.find({
      macaddress: { $in: req.params.macaddress },
      when: { $gte: startOfDay(current), $lte: endOfDay(current) },
    })
      .sort('when')
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  }

  async week(req, res) {
    await Task.find({
      macaddress: { $in: req.params.macaddress },
      when: { $gte: startOfWeek(current), $lte: endOfWeek(current) },
    })
      .sort('when')
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  }

  async month(req, res) {
    await Task.find({
      macaddress: { $in: req.params.macaddress },
      when: { $gte: startOfMonth(current), $lte: endOfMonth(current) },
    })
      .sort('when')
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  }

  async year(req, res) {
    await Task.find({
      macaddress: { $in: req.params.macaddress },
      when: { $gte: startOfYear(current), $lte: endOfYear(current) },
    })
      .sort('when')
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  }
}

module.exports = new TaskController();
