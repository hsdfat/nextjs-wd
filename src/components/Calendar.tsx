const Calendar = () => {
    return (
        <div className="mini_calendar m-auto pb-3" data-aos="fade-up-right">
            <div className="mini_calendar">
                <table>
                    <thead className="calendar-month"></thead>
                    <tr>
                        <th abbr="Sunday">CN</th>
                        <th abbr="Monday">Thứ 2</th>
                        <th abbr="Tuesday">Thứ 3</th>
                        <th abbr="Wednesday">Thứ 4</th>
                        <th abbr="Thursday">Thứ 5</th>
                        <th abbr="Friday">Thứ 6</th>
                        <th abbr="Saturday">Thứ 7</th>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>
                            <div id="today">8</div>
                        </td>
                        <td>9</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                    </tr>
                    <tr>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                        <td>23</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                        <td>30</td>
                        <td>31</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Calendar;