import { Button} from "@mui/material";

const Pagination = ({
  totalPost,
  postPerPage,
  setcurrentPage,
  currentPage,
}) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <Button
            onClick={() => setcurrentPage(page)}
            key={index}
            sx={{
              minWidth: "40px",
              padding: "0 4px",
              marginRight: "5px",
              marginBottom: "5px",
              marginTop: "5px",
            }}
            variant={page == currentPage ? "contained" : "outlined"}
          >
            {page}
          </Button>
        );
      })}
    </div>
  );
};

export default Pagination;
