import React, { useEffect } from "react";
import { useMatch, Link } from "react-router-dom";

import api from "../../services/api";
import logoImg from "../../assets/2.svg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Header, RepositoryInfo, Issues } from "./styles";

export const Repository: React.FC = () => {
  const params = useMatch("/repository/:repository");

  useEffect(() => {
    api.get(`repos/${params}`).then((response) => {
      console.log(response.data);
    });
  }, [params]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/39416095?v=4"
            alt="Orlando Brock"
          />
          <div>
            <strong>{`${params}`}</strong>
            <p>Descrição do perfil</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>12</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>0</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="asdkasjd">
          <div>
            <strong>asdasdasd</strong>
            <p>adasdsadsad</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};
