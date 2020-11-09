import { responseHandler } from '../../config/ResponseHandler.js'
import { Festivals } from '../models/Festivals.js'
import _ from 'lodash'
import fs from 'fs'
import moment from 'moment'

export const create = async (req, res) => {
  const { title, description, image, country, date } = req.body;

    const newPostMessage = new Festivals({ title, description, image, country, date })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getSingle = async (req, res, next) => {
  try {
    if (!req.params.id) {
      return errorHandle(404, 'Festival not found!', res)
    }
    const singleFest = await Festivals.find({
      _id: req.params.id,
      isDeleted: false,
    })
    res.send(responseHandler(singleFest))
  } catch (error) {
    next(error)
  }
}

export const getPosts  = async (req, res, next) => {
  try {
    let query = req.query
    let skip = 0
    let limit = 0
    let futureMonth = moment(Date.now()).add(2, 'M');
    let futureMonthEnd = moment(futureMonth).endOf('month');
    for (let key in query) {
      if (key == 'start') {
        skip = parseInt(query[key])
      } else if (key == 'end') {
        limit = parseInt(query[key]) - skip + 1
      }
    }
    if(Date.now()!= futureMonth.date() && futureMonth.isSame(futureMonthEnd.format('YYYY-MM-DD'))) {
    futureMonth = futureMonth.add(1, 'd');
    }
    const postData = await Festivals.find({"date": {"$gte": Date.now(), "$lt": futureMonth}})
      .sort({ date: 1 })
      .skip(skip)
      .limit(limit)
    res.send(responseHandler(postData, postData.length))
  } catch (error) {
    next(error)
  }
}

export const update = async (req, res, next) => {
  try {
    const id = req.params.id
    if (!id) {
      id = req.body._id
    }
    if (req.body._id) {
      delete req.body._id
    }

    const things = await Festivals.findOne({ _id: id })

    if (!things) {
      return res.send(new ErrorHandler(404, 'Festival not found!'))
    }

    let updated = _.assign(things, req.body)

    if (!updated) {
      return res.send(new ErrorHandler(404, 'Festival not found!'))
    }

    updated.save()

    return res.send(responseHandler(updated))
  } catch (error) {
    next(error)
  }
}

export const Search = async (req, res, next) => {
  try {
    let query = req.query.search
    let futureMonth = moment(Date.now()).add(2, 'M');
    let futureMonthEnd = moment(futureMonth).endOf('month');

    if(Date.now()!= futureMonth.date() && futureMonth.isSame(futureMonthEnd.format('YYYY-MM-DD'))) {
    futureMonth = futureMonth.add(1, 'd');
    }

    if (!query) {
      return res.send(responseHandler(null, true, 'Send search query first!'))
    }

    let userData = await Festivals.find({
      $or: [
        { title: { $regex: new RegExp(query, 'i') } },
        { country: { $regex: new RegExp(query, 'i') } },
      ],
      $and:[
        {"date": {"$gte": Date.now(), "$lt": futureMonth}}
      ]
      }).select('_id title country date description')
      return res.send(responseHandler({ userData }))
      
    } catch (error) {
    next(error)
    }
  }

