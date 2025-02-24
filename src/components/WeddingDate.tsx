const WeddingDate = ({wishId}) => {
    return (
      <section  className="py-5 section-sub-title weddingdate-section section-bg-affect" id="weddingdate">
        <div id={wishId} className="container-fluid">
          <div className="w-100">
            <div className="mini_calendar m-auto pb-3" data-aos="fade-up-right">
              <div className="mini_calendar">
                <table>
                  <caption className="calendar-month">Tháng 3 / 2025</caption>
                  <tr>
                    <th abbr="Monday">Thứ 2</th>
                    <th abbr="Tuesday">Thứ 3</th>
                    <th abbr="Wednesday">Thứ 4</th>
                    <th abbr="Thursday">Thứ 5</th>
                    <th abbr="Friday">Thứ 6</th>
                    <th abbr="Saturday">Thứ 7</th>
                    <th abbr="Sunday">CN</th>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>1</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>
                      <div id="today">9</div>
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>18</td>
                    <td>19</td>
                    <td>20</td>
                    <td>21</td>
                    <td>22</td>
                    <td>23</td>
                  </tr>
                  <tr>
                    <td>24</td>
                    <td>25</td>
                    <td>26</td>
                    <td>27</td>
                    <td>28</td>
                    <td>29</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>31</td>
                    <td id="emptydays" colSpan={6}>&nbsp;</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="countdown" data-aos="fade-up-left">
              <div className="m-auto" id="clock" data-date="2025-03-09" data-text-day="Ngày" data-text-hour="Giờ" data-text-minute="Phút" data-text-second="Giây"></div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WeddingDate;