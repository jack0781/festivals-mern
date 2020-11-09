import express from 'express'
import Multer from 'multer'
import {
  create,
  getFestivals ,
  Search,
  getSingle,
  update,
} from '../api/controllers/FestivalsController.js'

const router = express.Router()

const storage = Multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'src/uploads/')
  },
  filename: function (req, file, callback) {
    let re = /(?:\.([^.]+))?$/
    callback(
      null,
      Math.floor(Math.random() * 10000 + 1).toString() +
        Date.now() +
        '.' +
        re.exec(file.originalname)[1]
    )
  },
})

const upload = Multer({
  storage: storage,
}).single('image')

router.post('/',upload, create)
router.get('/', getFestivals )
router.get('/:search', Search)
router.post('/update/:id', upload, update)
router.get('/:id', getSingle)

export default router
