const express = require('express');
const router = express.Router();
const medicamentosAPIController = require('../../controllers/api/medicamentosAPIController');

router.get('/', medicamentosAPIController.listarMedicamentos);
router.post('/', medicamentosAPIController.cadastrarMedicamentos);
router.put('/:id', medicamentosAPIController.atualizarMedicamento);
router.get('/:medicamentoId', medicamentosAPIController.obterMedicamento);

module.exports = router;