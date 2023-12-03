const User = require("../Models/userModel");

//get all users
exports.allUsers = async (req, res) => {
  try {
    console.log("bonjour");
    /**
     * logic
     * 1-temchi lel base (mongo)
     * 2-t recuperi el mongo result
     * 3-tarja3 resultat lel user
     */
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json(err);
  }
};

//post user
exports.addUser = async (req, res) => {
  try {
    /**
     * 1-extraction des data mel request (body)
     * 2-com abec mongo pour l'ajout
     * 3-resulatat(ok , not ok )
     */

    const user = req.body; // {}
    const newUser = await User.create(user);
    res.json(newUser);
  } catch (err) {
    res.json(err);
  }
};

//delete user

exports.deleteUser = async (req, res) => {
  try {
    /**
     * 1-extraction id mel paramas and vefier l'existence
     * 2- si ok ==> n9oul lel mongo db nfass5ou
     * 3- si not ok (id n'existe pas ) ==> response error
     *
     */

    const userId = req.params.id;
    const deletedUser = await User.findOneAndDelete({ _id: userId });

    if (!deletedUser) {
      res.json("user with given id not found ");
    } else {
      res.json("user sucessfully deleted ");
    }
  } catch (err) {
    res.json(err);
  }
};

//update user
exports.updateUser = async (req, res) => {
  try {
    /**
     * 1- extraction id mel paramas and vefier l'existence
     * 2- si ok ==> n9oul lel mongo db yamel maj
     * 3- si not ok (id n'existe pas ) ==> response error
     *
     */

    const userId = req.params.id;
    const existedUser = await User.findOne({ _id: userId });

    if (!existedUser) {
      res.json("user with given id not found ");
    } else {
      // si ok ==> n9oul lel mongo db yamel maj
      //na9ra newdata
      const newData = req.body;
      const updatedUser = await User.findByIdAndUpdate(userId, {
        $set: {
          firstname: newData.firstname,
          email: newData.email,
          lastname,
          email: newData.email,
        },
      });
      res.json(updatedUser);
    }
  } catch (err) {
    res.json(err);
  }
};
