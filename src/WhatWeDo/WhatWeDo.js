import React from "react";
import "./WhatWeDo.css";
import { Link } from "react-router-dom";
import WordPress from "../assets/tvTWmvF5ekyd2SB20+P0Gr95PvofxNF4yXQqS3YAAAAASUVORK5CYII=.png";
import Pic from "../assets/343b0ec396800d1cbd0c0e6939e5afca_XL-compressor.jpg";
import GoogleAnalitics from "../assets/9k=.jpg";
export default function WhatWeDo() {
  return (
    <div>
      <div id="what">
        <div id="what_we_do">
          <h1>You Have Bright Ideas. We Bring Them To Life</h1>
          <h2>A One-Stop Solution for All Your Online Needs</h2>
        </div>
      </div>
      <div id="working">

      <h1 className="work_statements">How We Work</h1>
      </div>
      <hr />
      <div className="technique">
        <div className="word_side">
          <h1 className="technique_description">Discovery And Research</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            cupiditate veritatis, facilis incidunt, debitis minus aperiam, nulla
            pariatur ea praesentium consequatur deleniti sed numquam? Nihil
            iusto possimus a consectetur sunt!
          </p>
          <Link to="/contactus">
            <h3>Work With Us</h3>
          </Link>
        </div>
        <div className="picture_side">
          <img src={Pic} alt="" />
        </div>
      </div>
      <div className="technique">
      
        <div className="word_side">
          <h1 className="technique_description">Design And Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            cupiditate veritatis, facilis incidunt, debitis minus aperiam, nulla
            pariatur ea praesentium consequatur deleniti sed numquam? Nihil
            iusto possimus a consectetur sunt!
          </p>
          <Link to="/contactus">
            <h3>Work With Us</h3>
          </Link>
        </div>
        <div className="picture_side">
          <img src={Pic} alt="" />
        </div>
      </div>
      <div className="technique">
        <div className="word_side">
          <h1 className="technique_description">Testing And Launch</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            cupiditate veritatis, facilis incidunt, debitis minus aperiam, nulla
            pariatur ea praesentium consequatur deleniti sed numquam? Nihil
            iusto possimus a consectetur sunt!
          </p>
          <Link to="/contactus">
            <h3>Work With Us</h3>
          </Link>
        </div>
        <div className="picture_side">
          <img src={Pic} alt="" />
        </div>
      </div>
      <div id="technologies" />
      <h1 className="work_statements">Tools And Technologies We Use</h1>
      <hr />
      <div id="tech_stack">
        <div className="tech">
          <h4>CSS</h4>
          <svg viewBox="0 0 128 128">
            <path
              fill="#1572B6"
              d="M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
            />
            <path
              fill="#33A9DC"
              d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
            />
            <path
              fill="#fff"
              d="M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z"
            />
            <path
              fill="#EBEBEB"
              d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z"
            />
            <path
              fill="#fff"
              d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z"
            />
            <path
              fill="#EBEBEB"
              d="M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z"
            />
          </svg>
          <p>Used for styling</p>
        </div>
        <div className="tech">
          <h4>PostgreSQL</h4>
          <svg viewBox="0 0 128 128">
            <path d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.543-56.287-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968-6.301-.104-11.082 1.652-14.709 4.402 0 0-44.683-18.409-42.604 23.151.442 8.841 12.672 66.898 27.26 49.362 5.332-6.412 10.484-11.834 10.484-11.834 2.558 1.699 5.622 2.567 8.834 2.255l.249-.212c-.078.796-.044 1.575.099 2.497-3.757 4.199-2.653 4.936-10.166 6.482-7.602 1.566-3.136 4.355-.221 5.084 3.535.884 11.712 2.136 17.238-5.598l-.22.882c1.474 1.18 1.375 8.477 1.583 13.69.209 5.214.558 10.079 1.621 12.948 1.063 2.868 2.317 10.256 12.191 8.14 8.252-1.764 14.561-4.309 15.136-27.985" />
            <path d="M75.458 125.256c-4.367 0-7.211-1.689-8.938-3.32-2.607-2.46-3.641-5.629-4.259-7.522l-.267-.79c-1.244-3.358-1.666-8.193-1.916-14.419-.038-.935-.064-1.898-.093-2.919-.021-.747-.047-1.684-.085-2.664-1.553.742-3.213 1.27-4.962 1.568-3.079.526-6.389.356-9.84-.507-2.435-.609-4.965-1.871-6.407-3.82-4.203 3.681-8.212 3.182-10.396 2.453-3.853-1.285-7.301-4.896-10.542-11.037-2.309-4.375-4.542-10.075-6.638-16.943-3.65-11.96-5.969-24.557-6.175-28.693-.648-12.945 2.837-22.203 10.356-27.514 11.861-8.378 29.832-3.451 36.384-1.214 4.402-2.653 9.581-3.944 15.433-3.851 3.143.051 6.136.327 8.916.823 2.9-.912 8.628-2.221 15.185-2.139 12.081.144 22.092 4.852 28.949 13.615 4.894 6.252 2.474 19.381.597 26.651-2.642 10.226-7.271 21.102-12.957 30.57 1.544.011 3.781-.174 6.961-.831 6.274-1.295 8.109 2.069 8.607 3.575 1.995 6.042-6.677 10.608-9.382 11.864-3.466 1.609-9.117 2.589-13.745 2.377l-.202-.013-1.216-.107-.12 1.014-.116.991c-.311 11.999-2.025 19.598-5.552 24.619-3.697 5.264-8.835 6.739-13.361 7.709-1.544.33-2.947.474-4.219.474zm-9.19-43.671c2.819 2.256 3.066 6.501 3.287 14.434.028.99.054 1.927.089 2.802.106 2.65.355 8.855 1.327 11.477.137.371.26.747.39 1.146 1.083 3.316 1.626 4.979 6.309 3.978 3.931-.843 5.952-1.599 7.534-3.851 2.299-3.274 3.585-9.86 3.821-19.575l4.783.116-4.75-.57.14-1.186c.455-3.91.783-6.734 3.396-8.602 2.097-1.498 4.486-1.353 6.389-1.01-2.091-1.58-2.669-3.433-2.823-4.193l-.399-1.965 1.121-1.663c6.457-9.58 11.781-21.354 14.609-32.304 2.906-11.251 2.02-17.226 1.134-18.356-11.729-14.987-32.068-8.799-34.192-8.097l-.359.194-1.8.335-.922-.191c-2.542-.528-5.366-.82-8.393-.869-4.756-.08-8.593 1.044-11.739 3.431l-2.183 1.655-2.533-1.043c-5.412-2.213-21.308-6.662-29.696-.721-4.656 3.298-6.777 9.76-6.305 19.207.156 3.119 2.275 14.926 5.771 26.377 4.831 15.825 9.221 21.082 11.054 21.693.32.108 1.15-.537 1.976-1.529 5.37-6.459 10.479-11.844 10.694-12.07l2.77-2.915 3.349 2.225c1.35.897 2.839 1.406 4.368 1.502l7.987-6.812-1.157 11.808c-.026.265-.039.626.065 1.296l.348 2.238-1.51 1.688-.174.196 4.388 2.025 1.836-2.301z" />
            <path
              fill="#336791"
              d="M115.731 77.44c-13.925 2.873-14.882-1.842-14.882-1.842 14.703-21.816 20.849-49.51 15.545-56.287-14.47-18.488-39.519-9.745-39.937-9.518l-.135.024c-2.751-.571-5.83-.911-9.291-.967-6.301-.103-11.08 1.652-14.707 4.402 0 0-44.684-18.408-42.606 23.151.442 8.842 12.672 66.899 27.26 49.363 5.332-6.412 10.483-11.834 10.483-11.834 2.559 1.699 5.622 2.567 8.833 2.255l.25-.212c-.078.796-.042 1.575.1 2.497-3.758 4.199-2.654 4.936-10.167 6.482-7.602 1.566-3.136 4.355-.22 5.084 3.534.884 11.712 2.136 17.237-5.598l-.221.882c1.473 1.18 2.507 7.672 2.334 13.557-.174 5.885-.29 9.926.871 13.082 1.16 3.156 2.316 10.256 12.192 8.14 8.252-1.768 12.528-6.351 13.124-13.995.422-5.435 1.377-4.631 1.438-9.49l.767-2.3c.884-7.367.14-9.743 5.225-8.638l1.235.108c3.742.17 8.639-.602 11.514-1.938 6.19-2.871 9.861-7.667 3.758-6.408z"
            />
            <path
              fill="#fff"
              d="M75.957 122.307c-8.232 0-10.84-6.519-11.907-9.185-1.562-3.907-1.899-19.069-1.551-31.503.024-.881.754-1.577 1.64-1.55.881.024 1.575.758 1.55 1.639-.401 14.341.168 27.337 1.324 30.229 1.804 4.509 4.54 8.453 12.275 6.796 7.343-1.575 10.093-4.359 11.318-11.46.94-5.449 2.799-20.951 3.028-24.01.066-.878.828-1.539 1.71-1.472.878.066 1.537.832 1.472 1.71-.239 3.185-2.089 18.657-3.065 24.315-1.446 8.387-5.185 12.191-13.794 14.037-1.463.313-2.792.453-4 .454zM31.321 90.466c-.785 0-1.498-.145-2.116-.35-5.347-1.784-10.44-10.492-15.138-25.885-3.576-11.717-5.842-23.947-6.041-27.922-.589-11.784 2.445-20.121 9.02-24.778 13.007-9.216 34.888-.44 35.813-.062.815.333 1.207 1.265.873 2.081-.333.815-1.265 1.206-2.08.874-.211-.086-21.193-8.492-32.768-.285-5.622 3.986-8.203 11.392-7.672 22.011.167 3.349 2.284 15.285 5.906 27.149 4.194 13.742 8.967 22.413 13.096 23.79.648.216 2.62.873 5.439-2.517 5.305-6.382 10.178-11.476 10.227-11.526.61-.636 1.62-.657 2.256-.047.636.61.658 1.62.048 2.255-.048.05-4.847 5.067-10.077 11.359-2.477 2.979-4.851 3.853-6.786 3.853zM100.75 77.021c-.307 0-.617-.088-.891-.272-.73-.493-.924-1.484-.431-2.215 14.863-22.055 20.08-48.704 15.612-54.414-5.624-7.186-13.565-10.939-23.604-11.156-7.433-.16-13.341 1.738-14.307 2.069l-.243.099c-.971.305-1.716-.227-1.997-.849-.333-.736-.06-1.606.631-2.025.046-.027.192-.089.429-.176l-.021.006.021-.007c1.641-.601 7.639-2.4 15.068-2.315 11.108.118 20.284 4.401 26.534 12.388 2.957 3.779 2.964 12.485.019 23.887-3.002 11.625-8.651 24.118-15.497 34.277-.306.457-.81.703-1.323.703zM101.51 87.231c-2.538 0-4.813-.358-6.175-1.174-1.4-.839-1.667-1.979-1.702-2.584-.382-6.71 3.32-7.878 5.208-8.411-.263-.398-.637-.866-1.024-1.349-1.101-1.376-2.609-3.26-3.771-6.078-.182-.44-.752-1.463-1.412-2.648-3.579-6.418-11.026-19.773-6.242-26.612 2.214-3.165 6.623-4.411 13.119-3.716-1.911-5.822-11.011-24.034-32.604-24.388-6.494-.108-11.82 1.889-15.822 5.93-8.96 9.049-8.636 25.422-8.631 25.586.023.881-.672 1.614-1.553 1.637-.881.028-1.613-.672-1.637-1.553-.02-.727-.354-17.909 9.554-27.916 4.637-4.683 10.741-6.995 18.142-6.874 13.814.227 22.706 7.25 27.732 13.101 5.479 6.377 8.165 13.411 8.386 15.759.165 1.746-1.088 2.095-1.341 2.147l-.576.013c-6.375-1.021-10.465-.312-12.156 2.104-3.639 5.201 3.406 17.834 6.414 23.229.768 1.376 1.322 2.371 1.576 2.985.988 2.396 2.277 4.006 3.312 5.3.911 1.138 1.7 2.125 1.982 3.283.131.23 1.99 2.98 13.021.703 2.765-.57 4.423-.083 4.93 1.45.997 3.015-4.597 6.532-7.694 7.97-2.775 1.29-7.204 2.106-11.036 2.106zm-4.696-4.021c.35.353 2.101.962 5.727.806 3.224-.138 6.624-.839 8.664-1.786 2.609-1.212 4.351-2.567 5.253-3.492l-.5.092c-7.053 1.456-12.042 1.262-14.828-.577-.199-.131-.378-.267-.54-.401-.302.119-.581.197-.78.253-1.58.443-3.214.902-2.996 5.105zM51.252 92.125c-1.752 0-3.596-.239-5.479-.71-1.951-.488-5.24-1.957-5.19-4.37.057-2.707 3.994-3.519 5.476-3.824 5.354-1.103 5.703-1.545 7.376-3.67.488-.619 1.095-1.39 1.923-2.314 1.229-1.376 2.572-2.073 3.992-2.073.989 0 1.8.335 2.336.558 1.708.708 3.133 2.42 3.719 4.467.529 1.847.276 3.625-.71 5.006-3.237 4.533-7.886 6.93-13.443 6.93zm-7.222-4.943c.481.372 1.445.869 2.518 1.137 1.631.408 3.213.615 4.705.615 4.546 0 8.196-1.882 10.847-5.594.553-.774.387-1.757.239-2.274-.31-1.083-1.08-2.068-1.873-2.397-.43-.178-.787-.314-1.115-.314-.176 0-.712 0-1.614 1.009-.762.851-1.311 1.548-1.794 2.162-2.084 2.646-3.039 3.544-9.239 4.821-1.513.31-2.289.626-2.674.835zM56.299 79.822c-.774 0-1.454-.565-1.575-1.354-.04-.265-.066-.531-.08-.799-4.064-.076-7.985-1.82-10.962-4.926-3.764-3.927-5.477-9.368-4.699-14.927.845-6.037.529-11.366.359-14.229-.047-.796-.081-1.371-.079-1.769.003-.505.013-1.844 4.489-4.113 1.592-.807 4.784-2.215 8.271-2.576 5.777-.597 9.585 1.976 10.725 7.246 3.077 14.228.244 20.521-1.825 25.117-.385.856-.749 1.664-1.04 2.447l-.257.69c-1.093 2.931-2.038 5.463-1.748 7.354.134.871-.464 1.685-1.335 1.819l-.244.02zm-13.835-37.562l.062 1.139c.176 2.974.504 8.508-.384 14.86-.641 4.585.759 9.06 3.843 12.276 2.437 2.542 5.644 3.945 8.94 3.945h.068c.369-1.555.982-3.197 1.642-4.966l.255-.686c.329-.884.714-1.74 1.122-2.646 1.991-4.424 4.47-9.931 1.615-23.132-.565-2.615-1.936-4.128-4.189-4.627-4.628-1.022-11.525 2.459-12.974 3.837zM52.094 41.583c-.08.564 1.033 2.07 2.485 2.271 1.449.203 2.689-.975 2.768-1.539.079-.564-1.033-1.186-2.485-1.388-1.451-.202-2.691.092-2.768.656zM54.912 44.409l-.407-.028c-.9-.125-1.81-.692-2.433-1.518-.219-.29-.576-.852-.505-1.354.101-.736.999-1.177 2.4-1.177.313 0 .639.023.967.069.766.106 1.477.327 2.002.62.91.508.977 1.075.936 1.368-.112.813-1.405 2.02-2.96 2.02zm-2.289-2.732c.045.348.907 1.496 2.029 1.651l.261.018c1.036 0 1.81-.815 1.901-1.082-.096-.182-.762-.634-2.025-.81-.28-.04-.556-.059-.821-.059-.812 0-1.243.183-1.345.282zM96.228 40.432c.079.564-1.033 2.07-2.484 2.272-1.45.202-2.691-.975-2.771-1.539-.076-.564 1.036-1.187 2.486-1.388 1.45-.203 2.689.092 2.769.655zM93.409 42.992c-1.396 0-2.601-1.086-2.7-1.791-.115-.846 1.278-1.489 2.712-1.688.316-.044.629-.066.93-.066 1.238 0 2.058.363 2.14.949.053.379-.238.964-.739 1.492-.331.347-1.026.948-1.973 1.079l-.37.025zm.943-3.013c-.276 0-.564.021-.856.061-1.441.201-2.301.779-2.259 1.089.048.341.968 1.332 2.173 1.332l.297-.021c.787-.109 1.378-.623 1.66-.919.443-.465.619-.903.598-1.052-.028-.198-.56-.49-1.613-.49zM98.317 72.822c-.305 0-.613-.088-.886-.27-.732-.49-.929-1.481-.438-2.213 3.398-5.075 2.776-10.25 2.175-15.255-.257-2.132-.521-4.337-.453-6.453.07-2.177.347-3.973.614-5.71.317-2.058.617-4.002.493-6.31-.048-.88.627-1.631 1.507-1.679.883-.047 1.632.627 1.679 1.507.142 2.638-.197 4.838-.525 6.967-.253 1.643-.515 3.342-.578 5.327-.061 1.874.178 3.864.431 5.97.64 5.322 1.365 11.354-2.691 17.411-.308.459-.813.708-1.328.708z"
            />
            <path
              stroke="#fff"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.335 19.029"
              fill="none"
            />
          </svg>
          <p>Used for secure storage of personal information</p>
        </div>
        <div className="tech">
          <h4>JavaScript</h4>
          <svg viewBox="0 0 128 128">
            <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z" />
            <path
              fill="#323330"
              d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
            />
          </svg>
          <p>
            {" "}
            "The Programming Language of the Web", used to create web
            applications
          </p>
        </div>
        <div className="tech">
          <h4>React JS</h4>
          <svg viewBox="0 0 128 128">
            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
          </svg>
          <p>
            A fast, lightweight framework of JavaScript, used on the Fron-End
          </p>
        </div>
        <div className="tech">
          <h4>PhotoShop and Sketch</h4>
          <svg viewBox="0 0 128 128">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="#80B5E2"
              d="M50.246 41.616c-3.682-.925-7.369-.628-11.26-.022 0 6.805-.014 13.427.037 20.05.002.339.511.929.841.974 4.243.573 8.463.619 12.431-1.315 4.105-2 6.196-6.182 5.654-11.092-.492-4.471-3.139-7.448-7.703-8.595zM127 63.963v-60.678c0-2.096.023-2.285-2.012-2.285h-121.509c-1.979 0-2.479.19-2.479 2.186v121.509c0 2.018.252 2.021 2.209 2.021 40.555.001 81.231-.009 121.786.037 1.573.002 1.995-.417 1.991-1.959-.054-20.277.014-40.556.014-60.831zm-70.648 5.84c-5.557 1.982-11.352 2.093-17.352 1.628v22.569h-11v-1.402c0-18.895-.087-37.788-.14-56.682-.006-1.569.243-2.327 2.011-2.507 8.332-.852 16.617-1.81 24.902.133 8.906 2.087 14.041 7.975 14.431 16.11.483 10.074-3.944 16.974-12.852 20.151zm44.31 12.754c-.424 5.771-3.678 9.56-9.015 11.392-7.142 2.452-14.245 1.883-21.225-.891-1.143-.455-1.364-1.031-.987-2.196.687-2.126 1.19-4.312 1.72-6.286 2.951.866 5.757 1.947 8.664 2.458 2.053.361 4.272.149 6.359-.178 1.871-.294 3.217-1.564 3.524-3.572.312-2.041-.303-3.809-2.105-4.895-1.432-.862-3.01-1.479-4.523-2.202-2.433-1.163-5.026-2.075-7.27-3.53-8.831-5.727-5.956-16.383-.063-20.396 3.153-2.146 6.642-3.098 10.377-3.229 4.393-.154 8.623.604 12.778 2.623l-2.195 7.789c-1.74-.616-3.36-1.416-5.07-1.734-2.029-.378-4.157-.589-6.205-.422-2.746.225-4.354 2.12-4.354 4.47 0 1.392.528 2.57 1.689 3.245 1.666.969 3.434 1.768 5.186 2.579 1.896.877 3.898 1.551 5.723 2.552 4.87 2.67 7.405 6.8 6.992 12.423z"
            />
          </svg>
          <p>Styling Tools, utilized in the Design phase</p>
        </div>
        <div className="tech">
          <h4>Node Js</h4>
          <svg viewBox="0 0 128 128">
            <path
              fill="#83CD29"
              d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
            />
          </svg>
          <p>JavaScript Backend, used as a server and handling data</p>
        </div>
        <div className="tech">
          <h4>WordPres</h4>
          <img src={WordPress} alt="" />
          <p>
            A Content Management System, used for designing and making beautiful
            websites
          </p>
        </div>
        <div className="tech">
          <h4>Google Analytics</h4>
          <img src={GoogleAnalitics} alt="" />
          <p>Used for analizing user experience and behavior on websites</p>
        </div>
      </div>
      <Link to="/contactus">
        <h1 id="connect">LET'S CONNECT!</h1>
      </Link>
    </div>
  );
}
