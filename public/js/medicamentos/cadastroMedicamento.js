$(document).ready(function () {
  $('#formCadastroMedicamento').on('submit', function (e) {
    e.preventDefault();
    $.ajax({
      url: '/medicamentos',
      type: 'POST',
      data: $(this).serialize(),
      success: function (response) {
        $('#modalCadastroMedicamento').modal('hide');

        toastr.success('Medicamento cadastrado com sucesso!');

        // Recarregar a lista de medicamentos ou exibir uma mensagem
      },
      error: function (error) {
        toastr.error('Erro ao cadastrar medicamento.');
      }
    });
  });
});
