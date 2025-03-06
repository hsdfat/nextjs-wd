import CountdownTimer from "./CountdownTimer";

const Calendar = () => {
    return (
        <table>
            <tr className="line">
                <th abbr="Sunday" style={{ width: 200 }} >CN</th>
                <th abbr="Monday">T2</th>
                <th abbr="Tuesday">T3</th>
                <th abbr="Wednesday">T4</th>
                <th abbr="Thursday">T5</th>
                <th abbr="Friday">T6</th>
                <th abbr="Saturday">T7</th>
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
                <td>
                    <div className="engagement-day" >5</div>
                </td>
                <td>6</td>
                <td>7</td>
                <td>
                    <div className="wedding-day" >8</div>
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
    );
};

export default Calendar;