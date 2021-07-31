import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getUsersLikes } from "../redux/actions/userActions";
import Loader from "../components/Loader";
import findMatches from "../utils/findMatches";

const MatchesPage = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const usersLikesList = useSelector((state) => state.usersLikesList);
  const { loading, error, userslikes } = usersLikesList;
  

  // const arr = [1, 2, 4, 55, 99];

  // const obj = [
  //   {
  //     name: "kevin",
  //     likes: [2, 4, 99, 100, 107],
  //   },
  //   {
  //     name: "john",
  //     likes: [1, 14, 33, 44, 97],
  //   },
  //   {
  //     name: "joe",
  //     likes: [2, 4, 55, 99, 107],
  //   },
  // ];

  useEffect(() => {
    dispatch(getUsersLikes(userInfo._id, userInfo.yourGender));
  }, [dispatch, userInfo._id, userInfo.yourGender]);

  const result = findMatches(userInfo.likes, userslikes);
  console.log(result)

  return (
    <Row>
      {loading && <Loader />}
      {result &&
        result.map((match) => {
          return <p key={match.name}>{match.name}: {match.amt}</p>;
        })}
    </Row>
  );
};

export default MatchesPage;
