import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #161624;
  color: #f8fafc;
  padding: 20px 50px;
  min-height: 100vh;
  font-family: Roboto;
`

export const Heading = styled.h1`
  font-size: 25px;
  margin-bottom: 20px;
`

export const CountriesContainer = styled.ul`
  list-style-type: none;
  background-color: #1f1f2f;
  padding: 0;
  margin: 0;
  overflow: auto;
  max-height: 310px;
`

export const CountryListItem = styled.li`
  color: #94a3b8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 2px #334155;
  padding: 8px 17px;
  border-radius: 5px;
`

export const CountryName = styled.p`
  font-size: 18px;
`

export const VisitButton = styled.button`
  background-color: #0b69ff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 7px 10px;
  width: 70px;
  cursor: pointer;
  outline: none;
`

export const VisitedText = styled.p`
  color: #334155;
  font-weight: bold;
  margin-right: 10px;
`

export const VisitedCountriesContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;

  @media screen and (max-width: 790px) {
    justify-content: space-evenly;
  }
`

export const VisitedCountryItem = styled.li`
  background-color: #1f1f2f;
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const VisitCountryDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 8px;
  padding: 0 10px;
`

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 70px;
`

export const EmptyText = styled.p`
  color: #94a3b8;
  font-size: 23px;
`

export const RemoveButton = styled.button`
  background-color: transparent;
  color: #94a3b8;
  border: solid 2px #94a3b8;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`
