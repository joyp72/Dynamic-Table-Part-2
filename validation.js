// Joy Patel, COMP 4610 201
$().ready(function() {
    $("#form").validate({
        rules: {
            minCol: {
                required: true,
                min: -50
            },
            maxCol: {
                required: true,
                max: 50,
            },
            minRow: {
                required: true,
                min: -50
            },
            maxRow: {
                required: true,
                max: 50,
            }
          },
          messages: {
            minCol: {
                required: "This field is required.",
                min: "Invalid minimum column, enter a value not less than -50"
            },
            maxCol: {
                required: "This field is required.",
                max: "Invalid maximum column, enter a value not greater than 50",
            },
            minRow: {
                required: "This field is required.",
                min: "Invalid minimum row, enter a value not less than -50"
            },
            maxRow: {
                required: "This field is required.",
                max: "Invalid maximum row, enter a value not greater than 50",
            }
          },
          submitHandler: function (form) {
            generateTable()
          }
        }
    )
})