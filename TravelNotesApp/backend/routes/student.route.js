const express = require('express');
const tnRoute = express.Router();
// model
const userModel = require('../models/User');
const travelModel = require('../models/Travels')
const essentialModel = require('../models/Essentials');

//for essentials
tnRoute.route('/create-essential').post((req,res, next) => { 
  essentialModel.create(req.body, (error,data)=> { 
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

tnRoute.route('/essentials').get((req, res, next) => {
  essentialModel.find((error, data) => {
   if (error) {
     return next(error)
   } else {
     res.json(data)
   }
 })
})

tnRoute.route('/delete-ess/:id').delete((req, res, next) => {
  essentialModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

tnRoute.route('/edit-essential/:id').get((req, res, next) => {
  essentialModel.findById(req.params.id, (error, data) => {
   if (error) {
     return next(error)
   } else {
     res.json(data)
   }
 })
})
tnRoute.route('/update-ess/:id').put((req, res, next) => {
  essentialModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('ITEM successfully updated!')
    }
  })
})



// 

/// travels
tnRoute.route('/delete-loc/:id').delete((req, res, next) => {
  travelModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

tnRoute.route('/edit-travel/:id').get((req, res, next) => {
  travelModel.findById(req.params.id, (error, data) => {
   if (error) {
     return next(error)
   } else {
     res.json(data)
   }
 })
})



tnRoute.route('/update-travel/:id').put((req, res, next) => {
  travelModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('ITEM successfully updated!')
    }
  })
})
///


tnRoute.route('/create-student').post((req, res, next) => {
  travelModel.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});

tnRoute.route('/add-loc').post((req, res, next) => {
  travelModel.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});

tnRoute.route('/travels/:id').get((req, res, next) => {
  travelModel.findById(req.params.id, (error, data) => {
   if (error) {
     return next(error)
   } else {
     res.json(data)
   }
 })
})


tnRoute.route('/travels').get((req, res, next) => {
  travelModel.find((error, data) => {
   if (error) {
     return next(error)
   } else {
     res.json(data)
   }
 })
})
tnRoute.route('/update-locs/:id').put((req, res, next) => {
  travelModel.findByIdAndUpdate(req.params.id, {
    $push: {"travels.destinations": req.body}
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Student successfully updated!')
    }
    })
  })

tnRoute.route('/update-student/:id').put((req, res, next) => {
  travelModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Student successfully updated!')
    }
  })
})

tnRoute.route('/').get((req, res, next) => {
    userModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
tnRoute.route('/edit-student/:id').get((req, res, next) => {
   userModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})








// Delete
tnRoute.route('/delete-student/:id').delete((req, res, next) => {
  userModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = tnRoute;