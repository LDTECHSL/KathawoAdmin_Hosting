import { Box, TextField, Typography } from "@mui/material";

interface CommonInputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CommonInput: React.FC<CommonInputProps> = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <Box sx={{ mb: 2, width: "100%" }}>

      {label && (
        <Typography
          variant="body2"
          align="left"
          sx={{ mb: 1, color: "grey" }}
        >
          {label}
        </Typography>
      )}
      <TextField
        size="small"
        placeholder={placeholder}
        variant="outlined"
        fullWidth
        type={type}
        value={value}
        onChange={onChange}
        sx={{
          "& input": {
            color: "black",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "grey",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#e67e22",
            },
          },
          "& .MuiInputLabel-root": {
            color: "grey",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#d35400",
          },
        }}
      />
    </Box>
  );
};

export default CommonInput;
