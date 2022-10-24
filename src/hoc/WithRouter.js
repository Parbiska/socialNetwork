import { useParams } from 'react-router-dom';

export const withRouter = Children => props => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
}