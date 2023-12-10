
import mongoose from 'mongoose';
import User from '../models/userModel.js';
import httpStatus from 'http-status';

const { OK, INTERNAL_SERVER_ERROR } = httpStatus;


const userGet = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(OK).json(user);
    } catch (err) { next(err) }
}

const userGetAll = async (req, res, next) => {
    try {
        const user = await User.find();
        res.status(OK).json(user);
    } catch (err) { next(err) }
}

const userDel = async (req, res, next) => {
    try {
        const user = await User.findOneAndDelete(req.params.id);
        res.status(OK).json(user);
    } catch (err) { next(err) }
}

const userDelAll = async (req, res, next) => {
    try {
        const user = await User.deleteMany();
        res.status(OK).json(user);
    } catch (err) { next(err) }
}

const userCreate = async (req, res, next) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(OK).json(savedUser);
    } catch (err) {
        next(err);
    }
}

const userUpdate = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(OK).json(updatedUser);
    } catch (err) {
        next(err);
    }
}

const userCreateMultiple = async (req, res, next) => {
    try {
        const users = req.body;
        const createdUsers = await User.create(users);
        res.status(OK).json(createdUsers);
    } catch (err) {
        next(err);
    }
}

const userUpdateMultiple = async (req, res, next) => {
    try {
        const updates = req.body;
        const updatedUsers = [];

        for (const update of updates) {
            const updatedUser = await User.findByIdAndUpdate(update.id, update.fieldsToUpdate, { new: true });
            updatedUsers.push(updatedUser);
        }

        res.status(OK).json(updatedUsers);
    } catch (err) {
        next(err);
    }
}

export default {
    userGet,
    userGetAll,
    userDel,
    userDelAll,
    userCreate,
    userUpdate,
    userCreateMultiple,
    userUpdateMultiple
};
