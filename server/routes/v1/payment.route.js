// routes/payment.route.js
const express = require('express');
const paymentController = require('../../controllers/v1/payment.controller');
const router = express.Router();

router.post('/', paymentController.createPayment);
router.post('/str', paymentController.createPaymentintent);
router.get('/', paymentController.getPayments);
router.get('/:id', paymentController.getPaymentById);
router.put('/:id', paymentController.updatePayment);
router.delete('/:id', paymentController.deletePayment);

module.exports = router;
