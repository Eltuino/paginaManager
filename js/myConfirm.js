export default async function (respuesta, accion) {
    //   const swalWithBootstrapButtons = Swal.mixin({
    //     customClass: {
    //       confirmButton: "btn btn-success",
    //       cancelButton: "btn btn-danger",
    //     },
    //     buttonsStyling: false,
    //   });
  
    //   swalWithBootstrapButtons
    //     .fire({
    //       title: "Are you sure?",
    //       text: "You won't be able to revert this!",
    //       icon: "warning",
    //       showCancelButton: true,
    //       confirmButtonText: "Yes, delete it!",
    //       cancelButtonText: "No, cancel!",
    //       reverseButtons: true,
    //     })
    //     .then((result) => {
    //       if (result.isConfirmed) {
    //         swalWithBootstrapButtons.fire(
    //           "Deleted!",
    //           "Your file has been deleted.",
    //           "success"
    //         );
    //         return true;
    //       } else if (
    //         /* Read more about handling dismissals below */
    //         result.dismiss === Swal.DismissReason.cancel
    //       ) {
    //         swalWithBootstrapButtons.fire(
    //           "Cancelled",
    //           "Your imaginary file is safe :)",
    //           "error"
    //         );
    //         return false;
    //       }
    //     })
    //     .then((e) => {
    //       console.log(e)
    //     });
    let response;
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
  
    try {
      let result = await swalWithBootstrapButtons.fire({
        title: respuesta,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí­, eliminar",
        cancelButtonText: "No, cancelar",
        reverseButtons: true,
      });
      if (result.isConfirmed) {
      //   swalWithBootstrapButtons.fire(
      //     "Eliminado!",
      //     `Tu ${accion} fue eliminado`,
      //     "success"
      //   );
        response = true;
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          "Cancelado",
          `Tu ${accion} no fue eliminado`,
          "error"
        );
        response = false;
      }
    } catch (e) {
      console.log(e);
    }
  
    return response;
  }