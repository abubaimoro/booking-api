import { User } from "../models/user-models.js";

export const createUser = (req, res) => {
    const newUser = new User(req.body);
    newUser
        .save()
        .then((user) => {
            res.status(201).json(user);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}

export const loginUser = async (req, res) => {
try {
    const user await User.findOne({email: req.body.email});
    
    if (!user) {
        return res.status(404).json({message: "User not found"});
        }
    
    if (user.password !== req.body.password) {
        return res.status(401).json({message: "Incorrect password"});
        }
        res.status(200).json(user);
} catch (error) {
    res.status(500).json(error);
}

}