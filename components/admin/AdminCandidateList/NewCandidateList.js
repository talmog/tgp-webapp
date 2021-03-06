/**
 *
 * NewCandidateList
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { CSVLink } from 'react-csv/lib';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import EditIcon from '@material-ui/icons/Edit';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Link from 'next/link';
import moment from 'moment';
import { candidateRoute, partyResolver } from 'helpers/electionsHelper';
import { H3 } from 'components/shared/typogrophy';
import { numberFormatter } from 'helpers/numberHelper';

const Wrapper = styled.div`
  padding: 16px;
  overflow-x: auto;
`;

const Title = styled(H3)`
  margin-bottom: 12px;
  text-align: center;
  position: relative;
`;

const StyledSelect = styled(Select)`
  && {
    .MuiOutlinedInput-input {
      padding: 8px 32px 8px 14px;
    }
  }
`;
const CSVLinkWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
const headerStyle = {
  fontWeight: 700,
  fontSize: '1.05em',
};

function NewCandidateList({ candidates, updateCandidateCallback, chamber }) {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    if (candidates) {
      const data = [];
      candidates.map(candidate => {
        const fields = {
          id: candidate.id,
          firstName: candidate.firstName,
          lastName: candidate.lastName,
          party: candidate.party,
          chamber: candidate.chamber,
          race: candidate.race,
        };
        if (chamber !== 'presidential') {
          fields.state = candidate.state
            ? candidate.state.toLowerCase()
            : 'N/A';
        }
        if (chamber === 'house') {
          fields.district = candidate.district;
        }
        data.push(fields);
      });
      setTableData(data);
    }
  }, [candidates]);
  let str;
  let rowVal;
  let columnName;
  const customFilter = (query, row, column) => {
    str = query.value;
    columnName = query.id || column.Header.toLocaleLowerCase();
    rowVal = row._original[columnName];
    if (typeof str !== 'string') {
      str += '';
    }
    str = str.toLocaleLowerCase();
    if (typeof rowVal !== 'string') {
      rowVal += '';
    }
    rowVal = rowVal.toLocaleLowerCase();
    return rowVal.includes(str);
  };

  const columns = [
    {
      Header: 'Id',
      accessor: 'id',
      filterMethod: customFilter,
      headerStyle,
      maxWidth: 80,
    },
    {
      Header: 'Name',
      accessor: 'name',
      headerStyle,
      filterMethod: customFilter,
      Cell: row => {
        const chamberLower = row.original.chamber
          ? row.original.chamber.toLowerCase()
          : 'presidential';

        const route = candidateRoute(row.original);
        const editRoute = `/admin/add-candidate/${row.original.id}`;
        return (
          <>
            <Link href={editRoute} target="_blank" passHref>
              <a>
              <EditIcon />
              </a>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <a
              href={route}
              target="_blank"
              style={{
                textDecoration: row.original.isHidden ? 'line-through' : '',
              }}
            >
              {row.original.firstName} {row.original.lastName}
            </a>
          </>
        );
      },
    },
    {
      Header: 'Party',
      accessor: 'party',
      filterMethod: customFilter,
      headerStyle,
    },
    {
      Header: 'Race',
      accessor: 'race',
      filterMethod: customFilter,
      headerStyle,
    },
  ];

  const csvHeader = columns.map(column => ({
    label: column.Header,
    key: column.accessor,
  }));

  return (
    <Wrapper>
      <Title>
        {chamber} candidate list
        <CSVLinkWrapper>
          <Button variant="contained" color="primary">
            <CSVLink
              data={tableData}
              filename={`${chamber}_candidates_${moment().format(
                'YYYY_MM_DD',
              )}.csv`}
              headers={csvHeader}
              target="_blank"
            >
              <span style={{ color: '#FFF' }}>Download as a CSV</span>
            </CSVLink>
          </Button>
          &nbsp; &nbsp;
          <Link href="/admin/add-candidate">
            <Button variant="contained" color="secondary">
              <PersonAddIcon /> &nbsp; &nbsp; Add a candidate
            </Button>
          </Link>
        </CSVLinkWrapper>
      </Title>

      <ReactTable
        className="-striped -highlight"
        data={tableData}
        columns={columns}
        defaultPageSize={25}
        showPagination
        filterable
      />
    </Wrapper>
  );
}

NewCandidateList.propTypes = {
  candidates: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  updateCandidateCallback: PropTypes.func,
  chamber: PropTypes.string,
};

export default NewCandidateList;
