import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Autocomplete, TextField } from '@mui/material';

// ----------------------------------------------------------------------

RHFAutocomplete.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.node,
};

export default function RHFAutocomplete({ name, label, helperText, ...other }) {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } },index) => (
        <Autocomplete
        key={index}
          {...field}
          onChange={(event, newValue) => setValue(name, newValue, { shouldValidate: true })}
          renderInput={(params) => (
            <TextField
              label={label}
              error={!!error}
              helperText={error ? error?.message : helperText}
              {...params}
            />
          )}
          {...other}
        />
      )}
    />
  );
}

// import PropTypes from 'prop-types';
// // form
// import { useFormContext, Controller } from 'react-hook-form';
// // @mui
// import { Autocomplete, TextField } from '@mui/material';

// // ----------------------------------------------------------------------

// RHFAutoComlete.propTypes = {
//   name: PropTypes.string,
//   label: PropTypes.string,
//   helperText: PropTypes.node,
// };

// export default function RHFAutoComlete({ name, label, helperText, ...other }) {
//   const { control, setValue } = useFormContext();
//   console.log("hiiiiiiiiiiiiiiiii auto complete");

//   return (
//     <Controller
//       name={name}
//       control={control}
//       render={({ field, fieldState: { error } }) => (
//         <Autocomplete
//           {...field}
//           fullWidth
//           onChange={(event, newValue) => setValue(name, newValue, { shouldValidate: true })}
//           value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}


//           {...other}
//           renderInput={(params) => {
//             <TextField label={label} error={!!error} helperText={error ? error?.message : helperText} {...params} />
//           }}
//         />
//       )}
//     />
//   );
// }

