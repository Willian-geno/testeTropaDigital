import React, { useState } from "react";
import { EventsStyles } from "./events.styles"
import { CustomInput } from "../../../../components/input/input";
import { CustomButton } from "../../../../components/button/button";

// Exemplo de dados
const eventosExemplo = [
  { id: 1, nome: "Evento 1", totalEquipes: 10, status: "Ativo", data: "2024-06-01" },
  { id: 2, nome: "Evento 2", totalEquipes: 8, status: "Encerrado", data: "2024-06-02" },
  { id: 3, nome: "Evento 3", totalEquipes: 12, status: "Ativo", data: "2024-06-03" },
  { id: 4, nome: "Evento 4", totalEquipes: 7, status: "Pendente", data: "2024-06-04" },
  { id: 5, nome: "Evento 5", totalEquipes: 15, status: "Ativo", data: "2024-06-05" },
  { id: 6, nome: "Evento 6", totalEquipes: 9, status: "Encerrado", data: "2024-06-06" },
  { id: 7, nome: "Evento 7", totalEquipes: 11, status: "Ativo", data: "2024-06-07" },
  { id: 8, nome: "Evento 8", totalEquipes: 6, status: "Pendente", data: "2024-06-08" },
  { id: 9, nome: "Evento 9", totalEquipes: 13, status: "Ativo", data: "2024-06-09" },
  { id: 10, nome: "Evento 10", totalEquipes: 5, status: "Encerrado", data: "2024-06-10" },
  { id: 11, nome: "Evento 11", totalEquipes: 14, status: "Ativo", data: "2024-06-11" },
];

const Events = () =>{
    const [paginaAtual, setPaginaAtual] = useState(1);
    const itensPorPagina = 5;

    const indiceUltimoItem = paginaAtual * itensPorPagina;
    const indicePrimeiroItem = indiceUltimoItem - itensPorPagina;
    const eventosPagina = eventosExemplo.slice(indicePrimeiroItem, indiceUltimoItem);

    const totalPaginas = Math.ceil(eventosExemplo.length / itensPorPagina);

    return (
        <EventsStyles.EventsConteiner>
            <EventsStyles.EventsHeader>
                <div className="welcomeUser" >Bem vindo de volta, <strong>Willian Gustavo</strong></div>
                <div className="title">Todos eventos</div>
            </EventsStyles.EventsHeader>

            <EventsStyles.TableContener >

                <EventsStyles.TableHeader>
                    <div className="inputConteiner">
                        <CustomInput placeholder="Buscar"/>
                    </div>
                    <div className="buttonConteiner">
                        <CustomButton>Buscar</CustomButton>
                    </div>

                </EventsStyles.TableHeader>
            
                <EventsStyles.Table >

                    <thead>
                        <tr>
                            <th>Nome do evento</th>
                            <th>Total de Equipes</th>
                            <th>status</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventosPagina.map((evento) => (
                            <tr key={evento.id}>
                                <td>{evento.nome}</td>
                                <td>{evento.totalEquipes}</td>
                                <td>{evento.status}</td>
                                <td>{evento.data}</td>
                            </tr>
                        ))}
                    </tbody>
                </EventsStyles.Table>

                <EventsStyles.FooterTable style={{}}>
                    <CustomButton
                        onClick={() => setPaginaAtual((prev) => Math.max(prev - 1, 1))}
                        disabled={paginaAtual === 1}
                    >
                        Anterior
                    </CustomButton>
                    <span className="numberPage" >
                        Página {paginaAtual} de {totalPaginas}
                    </span>
                    <CustomButton
                        onClick={() => setPaginaAtual((prev) => Math.min(prev + 1, totalPaginas))}
                        disabled={paginaAtual === totalPaginas}
                    >
                        Próxima
                    </CustomButton>
                </EventsStyles.FooterTable>
            </EventsStyles.TableContener >


        </EventsStyles.EventsConteiner>
    )
}

export default Events;